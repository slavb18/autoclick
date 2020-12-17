import JsonSchemaForm from '@ilb/jsonschemaform';
import { Modal, Button, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import React from 'react';
import {
  AutoFields,
} from 'uniforms-semantic';


export default function Home(props) {
  const { data, schema } = props;
  const [open, setOpen] = React.useState(false);

  const handler = (formData) => alert(JSON.stringify(formData));


  return (
    <div className="centered">
      <Segment>
        <h1>Подобранный продукт</h1>
        <table>
          <tr>
            <td>Срок</td>
            <td>Ставка</td>
            <td>Платеж</td>
          </tr>
          <tr>
            <td>
              {data.period} мес.
            </td>
            <td>
              {data.rate} %
            </td>
            <td>
              {data.payment} ₽
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>Стоимость авто</td>
            <td>Первоначальный взнос</td>
          </tr>
          <tr>
            <td>
              {data.productAmount} ₽
            </td>
            <td>
              {data.downPayment} ₽
            </td>
          </tr>
        </table>

        <Modal onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open} trigger={<Button>Подобрать продукт</Button>}>
          <Modal.Header>
            <em>Подобрать продукт</em>
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <JsonSchemaForm schema={schema}
                model={data}
                onSubmit={handler}
              ><AutoFields />
              </JsonSchemaForm>
              <Button color='black' onClick={() => setOpen(false)}>
                Закрыть
              </Button>
              <Button
                content="Сохранить"
                labelPosition='right'
                icon='checkmark'
                onClick={() => setOpen(false)}
                positive
              />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Segment>
    </div>
  )
}

Home.propTypes = {
  schema: PropTypes.object,
  data: PropTypes.object,
};

export async function getServerSideProps() {
  const schema = {
    title: 'Параметры продукта',
    type: 'object',
    properties: {
      productAmount: { type: 'string', title: 'Стоимость авто' },
      downPayment: { type: 'string', title: 'Первоначальный взнос' },
      period: { type: 'string', title: 'Срок' },
      payment: { type: 'string', title: 'Платеж' },
    },
    required: ['productAmount', 'downPayment', 'period', 'payment'],
  }
  const data = {
    period: 60,
    rate: 11,
    payment: 25231,
    productAmount: 1200000,
    downPayment: 200000,
  };

  const props = { schema, data }

  return { props }
}
