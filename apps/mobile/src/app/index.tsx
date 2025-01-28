import { Redirect } from 'expo-router';

const Index = () => {
    return <Redirect href="/(authenticated)/(tabs)/groups" />;
};

export default Index;
