import JsonSchemaForm from '@ilb/jsonschemaform';
import { Modal, Button, Segment, Grid, Tab } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import React from 'react';
import {
  AutoFields, SubmitField,
} from 'uniforms-semantic';


function ProductForm({ data, setData }) {
  const [open, setOpen] = React.useState(false);
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
  };

  return <Segment>
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
            onSubmit={(formData) => { setOpen(false); setData(formData); }}
          >
            <AutoFields />
            <SubmitField className="ui positive" value="Сохранить" />
            <Button color='black' onClick={() => setOpen(false)}>
              Закрыть
            </Button>
          </JsonSchemaForm>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  </Segment>
}

ProductForm.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
};

function Upload() {
  return <div>
    <Segment centered>
      <h4>Перетащите скан/фото документов сюда</h4>
      <Button
        content="Загрузите с компьютера"
        labelPosition='right'
        icon='checkmark'
        positive
      />
      <Button color='black'>
        Загрузите с телефона
      </Button>
    </Segment>
  </div>
}

function AutoDossier() {
  const panes = [
    { menuItem: 'ПТС', render: () => <Tab.Pane><Upload /></Tab.Pane> },
    { menuItem: 'Договор купли-продажи', render: () => <Tab.Pane><Upload /></Tab.Pane> },
  ]
  return <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />;
}

export default function Cabinet(props) {
  const { data: serverData } = props;
  const [data, setData] = React.useState(serverData);

  // const handler = (formData) => alert(JSON.stringify(formData));

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width="12">
          <AutoDossier />
        </Grid.Column>
        <Grid.Column width="4">
          <ProductForm data={data} setData={setData} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

Cabinet.propTypes = {
  schema: PropTypes.object,
  data: PropTypes.object,
};

export async function getServerSideProps() {
  const schema = {};
  const data = {
    period: '60',
    rate: '11',
    payment: '25231',
    productAmount: '1200000',
    downPayment: '200000',
  };

  const props = { schema, data }

  return { props }
}
