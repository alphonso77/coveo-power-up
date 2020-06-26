import {
    Button,
    Card,
    Form,
    FormLayout,
    Layout,
    Page,
    Stack,
    TextField,
  } from '@shopify/polaris';
  
  class AnnotatedLayout extends React.Component {
    state = {
      coveoEndpoint: ''
    };
  
    render() {
      const { coveoEndpoint } = this.state;
  
      return (
        <Page>
          <Layout>
            <Layout.AnnotatedSection
              title="Coveo endpoint"
              description="Specify the Coveo endpoint URL."
            >
              <Card sectioned>
                <Form onSubmit={this.handleSubmit}>
                  <FormLayout>
                    <TextField
                      value={coveoEndpoint}
                      onChange={this.handleChange('coveoEndpoint')}
                      label="URL"
                      type="coveoEndpoint"
                    />
                    <Stack distribution="trailing">
                      <Button primary submit>
                        Save
                      </Button>
                    </Stack>
                  </FormLayout>
                </Form>
              </Card>
            </Layout.AnnotatedSection>
          </Layout>
        </Page>
      );
    }
  
    handleSubmit = () => {
      this.setState({
        coveoEndpoint: this.state.coveoEndpoint,
      });
      console.log('submission', this.state);
    };
  
    handleChange = (field) => {
      return (value) => this.setState({ [field]: value });
    };
  }
  
  export default AnnotatedLayout;