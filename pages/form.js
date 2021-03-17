import { Modal, Button, Form, Segment, Grid, Tab, Icon, Image} from 'semantic-ui-react'
import { AutoForm } from 'uniforms-semantic';
import { createSchemaBridge } from '../libs/uniforms';
import PropTypes from 'prop-types'
import React from 'react';
import {AutoFields, SubmitField,} from 'uniforms-semantic';
import {RangeStepInput} from 'react-range-step-input';
import { Checkbox } from 'semantic-ui-react'
import Link from 'next/link'
import RangeSlider from 'react-bootstrap-range-slider';
import { DragSwitch } from 'react-dragswitch'

function ListForm({ data, setData }) {
  	const [ value, setValue ] = React.useState(1000000);
    const [ value2, setValue2 ] = React.useState(100000);
    const [ value3, setValue3 ] = React.useState(6);
    const [ value4, setValue4 ] = React.useState(50000);
    const CheckboxExampleToggle = () => <Checkbox toggle />
  	const CheckboxExampleSlider = () => <Checkbox slider />
  	const [checked, setChecked] = React.useState(true)

  return <div>
   <Grid divided='vertically'>
      <Grid.Column width={3}>
        <Segment>
          Заявка на кредит
        </Segment>
        <Segment>
          	<Link href="/listOfApplications">
        		Список заявок
      		</Link>
        </Segment>
      </Grid.Column>
      <Grid.Column width={8}>
        <Segment>
        	<Form>
			    <Form.Field>
			      <label>Стоимость автомобиля:</label>
			      <p></p>
			      	<RangeSlider
	        		value={value}
	        		min={1000000}
	        		max={5000000}
	        		step={1000}
	        		onChange={changeEvent => setValue(changeEvent.target.value)}/>
        		  <p></p>
			    </Form.Field>
			    <Form.Field>
			      <label>Первоначальный взнос:</label>
		        	<p></p>
		        		<RangeSlider
		      			value={value2}
		      			min={100000}
		        		max={5000000}
		        		step={1000}
		      			onChange={changeEvent => setValue2(changeEvent.target.value)}/>
		        	<p></p>
			    </Form.Field>
			    <Form.Field>
			      <label>Срок кредита:</label>
		        	<p></p>
		        		<RangeSlider
		      			value={value3}
		      			min={6}
		        		max={120}
		        		step={3}
		      			onChange={changeEvent => setValue3(changeEvent.target.value)}/>
		        	<p></p>
			    </Form.Field>
			    <Form.Field>
			      <label>Стоимость дополнительного оборудования:</label>
		        	<p></p><RangeSlider
		      			value={value4}
		      			min={50000}
		        		max={250000}
		        		step={1000}
		      			onChange={changeEvent => setValue4(changeEvent.target.value)}/>
		        	<p></p>
			    </Form.Field>
			    <Form.Field>
			      <label>Услуги:</label>
				    <p></p>
				    <Grid divided='vertically'>
				    	<Grid.Column width={3}>
				    		КАСКО
				    	</Grid.Column>
				    	<Grid.Column width={2}>
				    		<div class="ui fitted toggle checkbox"><input type="checkbox" class="toggle" readonly="" tabindex="0" /><label></label></div>
				    	</Grid.Column>
				    </Grid>
				    <Grid divided='vertically'>
				    	<Grid.Column width={3}>
				    		Страхование
				    	</Grid.Column>
				    	<Grid.Column width={2}>
				    		<div class="ui fitted toggle checkbox"><input type="checkbox" checked={checked} onChange={(e) => {setChecked(e)}} class="toggle" readonly="" tabindex="0" /><label></label></div>
				    	</Grid.Column>
				    </Grid>
		        	<p></p>
			    </Form.Field>
			    <Button type='submit' color='green'>Рассчитать</Button>
			</Form>
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
      KASKO: { type: 'string', title: 'КАСКО' },
      insurance: { type: 'string', title: 'Страхование' },
      equipment: { type: 'string', title: 'Стоимость доп. оборудования' },
    },
    required: ['productAmount', 'downPayment', 'period', 'payment', 'KASKO', 'insurance', 'equipment'],
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
      <table>
        <tr>
          <td>КАСКО: </td>
          <td>Страхование: </td>
        </tr>
        <tr>
          <td>
            {data.KASKO} ₽
          </td>
          <td>
            {data.insurance} ₽
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td>Стоимость доп. оборудования: </td>
        </tr>
        <tr>
          <td>
            {data.equipment} ₽
          </td>
        </tr>
      </table>
      <p></p>
        <Button color='green' content="Отправить на рассмотрение"/>
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
    KASKO: '80000',
    insurance: '60000',
    equipment: '120000',
  };

  const props = { schema, data }

  return { props }
}

