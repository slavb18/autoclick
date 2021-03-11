import { Modal, Button, Segment, Grid, Tab, Icon, Image} from 'semantic-ui-react'
import { AutoForm } from 'uniforms-semantic';
import { createSchemaBridge } from '../libs/uniforms';
import PropTypes from 'prop-types'
import React from 'react';
import {AutoFields, SubmitField,} from 'uniforms-semantic';
import {RangeStepInput} from 'react-range-step-input';

function ListForm({ data, setData }) {
	const [open, setOpen] = React.useState(false);
  const onSubmit = (formData) => { setOpen(false); setData(formData); }
  const schema = {
    title: 'Заявка на кредит: ',
    type: 'object',
    properties: {
    message: { type: 'string', title: 'Заявка'},
      },
    required: ['list'],
  };
  return <div>
   <Grid divided='vertically'>
      <Grid.Column width={3}>
        <Segment>
          Заявка на кредит
        </Segment>
      </Grid.Column>
      <Grid.Column width={8}>
        <Segment>
        	Стоимость автомобиля:
        	<p></p>
        		<AutoForm      
		            schema={createSchemaBridge(schema)}
		            model={data}            
		            onSubmit={onSubmit}        
		            showInlineError={true}>        
		            <input type="text" min='1000000' required placeholder='от 1 000 000 руб. до 15 000 000 руб.' name="Surname" />    
		        </AutoForm>
		    <p></p>
		    Первоначальный взнос:
        	<p></p>
        		<AutoForm      
		            schema={createSchemaBridge(schema)}
		            model={data}            
		            onSubmit={onSubmit}        
		            showInlineError={true}>        
		            <input type="text" min ='100000' required placeholder='от 100 000' name="Surname" />    
		        </AutoForm>
		    <p></p>
		    Срок кредита:
        	<p></p>
        		<AutoForm      
		            schema={createSchemaBridge(schema)}
		            model={data}            
		            onSubmit={onSubmit}        
		            showInlineError={true}>        
		            <input type="text" min='1' required placeholder='от 1 года' name="Surname" />    
		        </AutoForm>
		    <p></p>
		    Услуги:

        	<p></p>
        	<Button color='green'>Рассчитать</Button>
        </Segment>
      </Grid.Column>
   </Grid>
  </div>
}

function ProductForm({ data, setData }) {
  const [open, setOpen] = React.useState(false);
  const onSubmit = (formData) => { setOpen(false); setData(formData); }
  const schema = {
    title: 'Параметры продукта',
    type: 'object',
    properties: {
      productAmount: { type: 'string', title: 'Стоимость авто' },
      downPayment: { type: 'string', title: 'Первоначальный взнос' },
      period: { type: 'string', title: 'Срок' },
    },
    required: ['productAmount', 'downPayment', 'period', 'payment'],
  };

  return <div>
    <Segment>
      <h1>Подобранный продукт</h1>
      <table>
        <tr>
          <td>Срок: </td>
          <td>Ставка: </td>
          <td>Платеж: </td>
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
          <td>Стоимость авто: </td>
          <td>Первоначальный взнос: </td>
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
      <p>Услуги:</p>
    </Segment>
  </div>
}



ProductForm.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
};


export default function Cabinet(props) {
  const { data: serverData } = props;
  const [data, setData] = React.useState(serverData);

  // const handler = (formData) => alert(JSON.stringify(formData));

  return (
    <Grid  divided='vertically'>
      <Grid.Row>
	      <Grid.Column width="17">
	      <Segment></Segment>
	      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width="11">
          <ListForm/>
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
