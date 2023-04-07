import React, { useEffect, useState } from 'react';

import { Card, Input, Stack } from '@chakra-ui/react';
import { CurrencyCode, User } from '@prisma/client';
import { omit, sumBy } from 'lodash';
import shortId from 'shortid';

import FileUpload from '@/components/FileUpload';
import FileUploadEmpty from '@/components/FileUploadEmpty';
import FileUploadImage from '@/components/FileUploadImage';
import { ByUserId } from '@/modules/common/types';
import { ExpenseShare } from '@/modules/expenses';
import { supabase } from '@/services/supabase';

import ExpensePayerSelect from './ExpensePayerSelect';
import ExpenseSharesList from './ExpenseSharesList';
import MoneyInput from './MoneyInput';

export type ExpenseFormValue = {
	payerId: string;
	amount: number;
	title: string;
	shares: ByUserId<ExpenseShare>;
	image?: string;
};
export interface ExpenseFormProps {
	value: ExpenseFormValue;
	onChange: (value: ExpenseFormValue) => void;
	currency: CurrencyCode;
	members: User[];
}

const ExpenseForm = (props: ExpenseFormProps) => {
	const { value, onChange, currency, members } = props;
	const { payerId, amount, title, shares, image } = value;

	const [amountKey, setAmountKey] = useState<number>(0);
	const [amountEdited, setAmountEdited] = useState<boolean>(false);
	const [isUploading, setIsUploading] = useState<boolean>(false);

	useEffect(() => {
		if (!amountEdited) {
			setAmountKey((prev) => prev + 1);
		}
	}, [amount, amountEdited]);

	const handlePayerIdChange = (payerId: string) => {
		onChange({
			...value,
			payerId,
		});
	};

	const handleAmountChange = (amount: number) => {
		setAmountEdited(true);
		onChange({
			...value,
			amount,
		});
	};

	const handleTitleChange = (title: string) => {
		onChange({
			...value,
			title,
		});
	};

	const handleImageChange = (image: string | null) => {
		if (!!image) {
			onChange({
				...value,
				image,
			});
		} else {
			onChange(omit(value, 'image'));
		}
	};

	const handleFileSelect = async (file: File, name: string) => {
		setIsUploading(true);
		const path = `${shortId.generate()}-${name}`;
		const { error } = await supabase.storage.from('expenses').upload(path, file, {
			cacheControl: '3600',
			upsert: false,
		});

		if (error) {
			console.log('File upload error', error);
		} else {
			const publicUrl = supabase.storage.from('expenses').getPublicUrl(path).data.publicUrl;
			handleImageChange(publicUrl);
		}
		setIsUploading(false);
	};

	const handleSharesChange = (shares: ByUserId<ExpenseShare>) => {
		const newValue = { ...value, shares };
		if (!value.amount) {
			newValue.amount = sumBy(Object.values(shares), (share) => share.amount ?? 0);
		}
		onChange(newValue);
	};

	return (
		<Stack direction="column" spacing={1}>
			<ExpensePayerSelect payerId={payerId} onPayerIdChange={handlePayerIdChange} users={members} />
			<FileUpload accept={'image/*'} onFileSelected={handleFileSelect} disabled={isUploading}>
				{!image ? (
					<FileUploadEmpty label="Add an image" isLoading={isUploading} />
				) : (
					<FileUploadImage image={image} onRemove={() => handleImageChange(null)} />
				)}
			</FileUpload>

			<Card background="white" borderRadius="lg">
				<MoneyInput
					key={amountKey}
					initialValue={amount}
					onChange={handleAmountChange}
					currency={currency}
					width="full"
					size="lg"
					borderRadius="lg"
					sx={{ borderColor: 'transparent' }}
				/>
			</Card>

			<Card background="white" borderRadius="lg">
				<Input
					textAlign="center"
					placeholder="Add comment"
					background="white"
					size="lg"
					value={title}
					onChange={(e) => handleTitleChange(e.target.value)}
					sx={{ borderColor: 'transparent' }}
				/>
			</Card>
			<ExpenseSharesList
				value={shares}
				currency={currency}
				onChange={handleSharesChange}
				members={members}
				total={amount || 0}
			/>
		</Stack>
	);
};

export default ExpenseForm;
