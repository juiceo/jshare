const main = async () => {
    /**
     * TODO: Implement seeding
     */
};

main()
    .then(() => {
        console.log('Seeding done.\n');
        console.log(`- Run "pnpm studio" to view the database in Supabase Studio`);
        process.exit(0);
    })
    .catch((error) => {
        console.error('Seeding failed: ', error.message);
        process.exit(1);
    });
