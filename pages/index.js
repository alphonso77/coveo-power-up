import { EmptyState, Layout, Page, TextStyle } from '@shopify/polaris';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => (
    <Page>
        <Layout>
            <EmptyState
                heading="Power up with Coveo search."
                action={{
                    content: 'Get Started...',
                    onAction: () => console.log("get started clicked"),
                }}
                image={img}
            >
                <p>Benefit from Automatic Relevance Tuning, Search Suggestions, and other
            ML powered Coveo features.</p>
            </EmptyState>
        </Layout>
    </Page>
);

export default Index;