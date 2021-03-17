import { Modal, Button, Form, Checkbox, Segment, Grid, Tab, Icon, Image, List} from 'semantic-ui-react'
import { AutoForm } from 'uniforms-semantic';
import { createSchemaBridge } from '../libs/uniforms';
import PropTypes from 'prop-types'
import React from 'react';
import {AutoFields, SubmitField,} from 'uniforms-semantic';
import Link from 'next/link'

import doc1 from './dog/document.jpg'
import doc2 from './dog/document2.png'

function ListOfApplications({ data, setData }) {
  const [open, setOpen] = React.useState(false);
  const onSubmit = (formData) => { setOpen(false); setData(formData); }
  const schema = {
    title: 'Параметры поиска',
    type: 'object',
    properties: {
      message: { type: 'string', title: 'Параметры поиска'},
      },
  };
  return <div>
	<Grid divided='vertically'>
	  <Grid.Column width={13}>  
		<Segment>
			<p>Введите параметры поиска:</p>
			<p></p>
			<Form>
				<Form.Group widths='equal'>
		          <Form.Input placeholder='Фамилия' />
		          <Form.Input placeholder='Имя' />
		          <Form.Input placeholder='Отчество' />
		          <Form.Input placeholder='Телефон' />
		        </Form.Group>
			    <Button type='submit' color='green'>Искать</Button>
			</Form>
	    </Segment>
	  </Grid.Column>
	  <Grid.Column width={3}>
	  	<p></p>
	  	<Link href="/form">
        	<Button color='green'  floated='right' content="Подать заявку"/>
      	</Link>
      </Grid.Column>
    </Grid>

        <Segment>
          <List divided verticalAlign='middle'>
            <List.Item>
              <List.Content floated='right'>
              	<Link href="/cabinet">
          			<Button color='green' content="Открыть" labelPosition='right'
                	icon='arrow alternate circle right'/>
        		</Link>
        	  </List.Content>	
        	  <List.Content>
        	  	Иванов Иван Иванович
                <p>Марка: FAW; Модель: Besturn X40; Год выпуска: 2020;</p>
                <p>Название салона: VOLVO CAR ИЖЕВСК</p>
                <p>Сумма кредита: 1 072 000 руб., Первоначальный взнос: 550 000 руб.</p>
        	  </List.Content>
            </List.Item>
                
            <List.Item>
              <List.Content floated='right'>
              	<p></p><Link href="/cabinet">
          			<Button color='green' content="Открыть" labelPosition='right'
                	icon='arrow alternate circle right'/>
        		</Link>
        	  </List.Content>
        	  <List.Content>
        	  	<p></p>	
                Иванов Алексей Игоревич
                <p>Марка: Changan; Модель: CS75; Год выпуска: 2020;</p>
                <p>Название салона: Комос-МБ</p>
                <p>Сумма кредита: 1 719 900 руб., Первоначальный взнос: 275 000 руб.</p>
              </List.Content>
            </List.Item>

         	<List.Item>
              <List.Content floated='right'>
              	<p></p><Link href="/cabinet">
          			<Button color='green' content="Открыть" labelPosition='right'
                	icon='arrow alternate circle right'/>
        		</Link>
        	  </List.Content>
        	  <List.Content>
        	  	<p></p>	
                Смирнов Иван Васильевич
                <p>Марка: Dongfeng; Модель: AX7; Год выпуска: 2020;</p>
                <p>Название салона: FAW Центр Ижевск</p>
                <p>Сумма кредита: 1 329 000 руб., Первоначальный взнос: 335 000 руб.</p>
              </List.Content>
            </List.Item>

          	<List.Item>
              <List.Content floated='right'>
              	<p></p><Link href="/cabinet">
          			<Button color='green' content="Открыть" labelPosition='right'
                	icon='arrow alternate circle right'/>
        		</Link>
        	  </List.Content>
        	  <List.Content>	
                <p></p>
                Краснова Мария Владимировна
                <p>Марка: JAC; Модель: T6; Год выпуска: 2020;</p>
                <p>Название салона: Субару Центр Ижевск</p>
                <p>Сумма кредита: 1 449 000 руб., Первоначальный взнос: 140 000 руб.</p>
              </List.Content>
            </List.Item>

          	<List.Item>
              <List.Content floated='right'>
              	<p></p><Link href="/cabinet">
          			<Button color='green' content="Открыть" labelPosition='right'
                	icon='arrow alternate circle right'/>
        		</Link>
        	  </List.Content>
        	  <List.Content>
                <p></p>
                Архипов Николай Андреевич
                <p>Марка: Changan; Модель: Besturn CS75; Год выпуска: 2020;</p>
                <p>Название салона: Субару Центр Ижевск</p>
                <p>Сумма кредита: 1 619 900 руб., Первоначальный взнос: 250 000 руб.</p>
              </List.Content>
            </List.Item>
          
          	<List.Item>
              <List.Content floated='right'>
              	<p></p><Link href="/cabinet">
          			<Button color='green' content="Открыть" labelPosition='right'
                	icon='arrow alternate circle right'/>
        		</Link>
        	  </List.Content>
        	  <List.Content>
                <p></p>
                Емельянова Антонина Михайловна
                <p>Марка: GAC; Модель: GS8; Год выпуска: 2020;</p>
                <p>Название салона: АСПЭК-Открытие</p>
                <p>Сумма кредита: 2 518 000 руб., Первоначальный взнос: 950 000 руб.</p>
              </List.Content>
            </List.Item>
          
          	<List.Item>
              <List.Content floated='right'>
              	<p></p><Link href="/cabinet">
          			<Button color='green' content="Открыть" labelPosition='right'
                	icon='arrow alternate circle right'/>
        		</Link>
        	  </List.Content>
        	  <List.Content>
                <p></p>
                Сабиров Даниила Валентинович
                <p>Марка: JAC; Модель: S3; Год выпуска: 2020;</p>
                <p>Название салона: АСПЭК-Открытие</p>
                <p>Сумма кредита: АСПЭК-Открытие руб., Первоначальный взнос: 400 000 руб.</p>
              </List.Content>
            </List.Item>
          </List>
        </Segment>
  </div>
}

export default function Cabinet(props) {
  const { data: serverData } = props;
  const [data, setData] = React.useState(serverData);

  // const handler = (formData) => alert(JSON.stringify(formData));

  return (
    <Grid>
      <Grid.Row>
      	<Grid.Column width="100%">
      		<Segment></Segment>
      	</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width="80%">
          <ListOfApplications/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

