import { Formik, Field, Form } from 'formik';

export default function SearchBar ({onSearchBtn}) {
      return (
        <Formik
          initialValues={{
            search:'',
          }}

            onSubmit={(values, action) => {  
                onSearchBtn(values.search)}}>
                <Form>
                    <header>
                        <button type="submit">
                        <span>Search</span>
                        </button>
                            <Field
                            name="search"
                                type="text"
                                autoComplete="off"
                                autoFocus
                                placeholder=""
                            />
                    </header>
                </Form>
        </Formik>
      )
};
