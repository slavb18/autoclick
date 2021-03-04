import { Modal, Button, Segment, Grid, Tab, Icon, Image} from 'semantic-ui-react'
import { AutoForm } from 'uniforms-semantic';
import { createSchemaBridge } from '../libs/uniforms';
import PropTypes from 'prop-types'
import React from 'react';
import {AutoFields, SubmitField,} from 'uniforms-semantic';

import doc1 from './dog/document.jpg'
import doc2 from './dog/document2.png'

function ListForm({ pages }) {
  return <div>
  <Segment></Segment>
   <Grid divided='vertically'>
   		<Grid.Column width={3}>
   			<Segment>
   				Загруженные документы
   			</Segment>
   		</Grid.Column>
   		<Grid.Column width={12}>
   			<Segment>
   				<Segment>
	   				<Grid columns={3} divided>
	   					<Grid.Column width={1}>
	   						<img src={doc1} width="50" height="50" /> 
	   					</Grid.Column>
	   					<Grid.Column width={11}>
	   						Договор№124432.png
	   						<p>Добавлен 04.02.2021 в 11:46</p>
	   					</Grid.Column>
	   					<Grid.Column width={4}>
	   						<Button color='green'>Скачать</Button>
	   						<Button color='red'>Удалить</Button>
	   					</Grid.Column>
	   				</Grid>
   				</Segment>
   				<Segment>
	   				<Grid columns={3} divided>
	   					<Grid.Column width={1}>
	   						<img src={doc2} width="55" height="50" /> 
	   					</Grid.Column>
	   					<Grid.Column width={11}>
	   						Договор№54433.png
	   						<p>Добавлен 02.03.2021 в 12:15</p>
	   					</Grid.Column>
	   					<Grid.Column width={4}>
	   						<Button color='green'>Скачать</Button>
	   						<Button color='red'>Удалить</Button>
	   					</Grid.Column>
	   				</Grid>
   				</Segment>
   				<Segment>
	   				<Grid columns={3} divided>
	   					<Grid.Column width={1}>
	   						<img src={doc1} width="50" height="50" /> 
	   					</Grid.Column>
	   					<Grid.Column width={11}>
	   						Договор.jpg
	   						<p>Добавлен 01.03.2021 в 15:23</p>
	   					</Grid.Column>
	   					<Grid.Column width={4}>
	   						<Button color='green'>Скачать</Button>
	   						<Button color='red'>Удалить</Button>
	   					</Grid.Column>
	   				</Grid>
   				</Segment>
   				<Segment>
	   				<Grid columns={3} divided>
	   					<Grid.Column width={1}>
	   						<img src={doc2} width="55" height="50" /> 
	   					</Grid.Column>
	   					<Grid.Column width={11}>
	   						Согласие супруга.jpg
	   						<p>Добавлен 28.02.2021 в 11:46</p>
	   					</Grid.Column>
	   					<Grid.Column width={4}>
	   						<Button color='green'>Скачать</Button>
	   						<Button color='red'>Удалить</Button>
	   					</Grid.Column>
	   				</Grid>
   				</Segment>
   				<Segment>
	   				<Grid columns={3} divided>
	   					<Grid.Column width={1}>
	   						<img src={doc1} width="50" height="50" /> 
	   					</Grid.Column>
	   					<Grid.Column width={11}>
	   						ИНН.jpg
	   						<p>Добавлен 28.02.2021 в 11:42</p>
	   					</Grid.Column>
	   					<Grid.Column width={4}>
	   						<Button color='green'>Скачать</Button>
	   						<Button color='red'>Удалить</Button>
	   					</Grid.Column>
	   				</Grid>
   				</Segment>
   				<Segment>
	   				<Grid columns={3} divided>
	   					<Grid.Column width={1}>
	   						<img src={doc1} width="50" height="50" /> 
	   					</Grid.Column>
	   					<Grid.Column width={11}>
	   						Договор№98766.png
	   						<p>Добавлен 26.02.2021 в 09:57</p>
	   					</Grid.Column>
	   					<Grid.Column width={4}>
	   						<Button color='green'>Скачать</Button>
	   						<Button color='red'>Удалить</Button>
	   					</Grid.Column>
	   				</Grid>
   				</Segment>
   				<Segment>
	   				<Grid columns={3} divided>
	   					<Grid.Column width={1}>
	   						<img src={doc2} width="55" height="50" /> 
	   					</Grid.Column>
	   					<Grid.Column width={11}>
	   						Согласие супруга.jpg
	   						<p>Добавлен 24.02.2021 в 19:32</p>
	   					</Grid.Column>
	   					<Grid.Column width={4}>
	   						<Button color='green'>Скачать</Button>
	   						<Button color='red'>Удалить</Button>
	   					</Grid.Column>
	   				</Grid>
   				</Segment>
   			</Segment>
   		</Grid.Column>
   </Grid>
  </div>
}


ListForm.propTypes = {
  pages: PropTypes.array,
};



export default function Cabinet(props) {
  const { data: serverData } = props;
  const [data, setData] = React.useState(serverData);

  // const handler = (formData) => alert(JSON.stringify(formData));

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width="100%">
          <ListForm />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

Cabinet.propTypes = {
  schema: PropTypes.object,
  data: PropTypes.object,
};