import { Modal, Button, Segment, Grid, Tab, Icon, Image} from 'semantic-ui-react'
import { AutoForm } from 'uniforms-semantic';
import { createSchemaBridge } from '../libs/uniforms';
import PropTypes from 'prop-types'
import React from 'react';
import {AutoFields, SubmitField,} from 'uniforms-semantic';

import page1 from './dog/page-1.jpg'
import page2 from './dog/page-2.jpg'
import page3 from './dog/page-3.jpg'
import a1 from './dog/a1.png'
import doc1 from './dog/document.jpg'
import doc2 from './dog/document2.png'

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
        open={open} trigger={<Button
          content="Подобрать продукт"
          labelPosition='right'
          icon='calculator'
          positive
        />}>
        <Modal.Header>
          <em>Подобрать продукт</em>
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>

            <AutoForm
              schema={createSchemaBridge(schema)}
              model={data}
              onSubmit={onSubmit}
              showInlineError={true}>
              <AutoFields />
              <SubmitField className="ui positive" value="Сохранить" />
              <Button color='black' onClick={() => setOpen(false)}>
                Закрыть
              </Button>
            </AutoForm>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Segment>
  </div>
}



ProductForm.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
};

function Chat({ data, setData }) {
  const [open, setOpen] = React.useState(false);
  const onSubmit = (formData) => { setOpen(false); setData(formData); }
  const schema = {
    title: 'Сообщения',
    type: 'object',
    properties: {
      message: { type: 'string', title: 'Сообщения'},
      },
    required: ['message'],
  };

  return <div>
    <Segment>
      <Modal onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open} trigger={<Button
          content="Сообщения"  color='green' positive
        />}>
        <Modal.Header>
          <em>Сообщения</em>
        </Modal.Header>
        <Modal.Content scrolling>
          <Modal.Description>
            <Grid divided='vertically'>
              <Grid.Column width={5}>
                  <Segment>
                    Собеседник1
                  </Segment>
              </Grid.Column>
              <Grid.Column width={10} height={10}>
                  <Segment>
                      <Segment color='green'>
                          <p align='left'>15:02</p>
                          <p>Добрый день! Вот здесь ошибка:</p>
                          <img src={page2} width="150" height="150" /> 
                      </Segment>
                      <Segment>
                        <p align='right'>16:53</p>
                        <p>Здравствуйте!</p>
                      </Segment>
                      <Segment>
                        <p align='right'>16:54</p>
                        <p>Можете подсказать, какая ошибка?</p>
                        <p>И вот паспорт</p>
                        <img src={a1} width="150" height="150" /> 
                      </Segment>
                      <Segment color='green'>
                        <p align='left'>17:02</p>
                        <p>Добрый день!</p>
                      </Segment>
                  </Segment>
              </Grid.Column>
            </Grid>
            <Grid divided='vertically'>
              <Grid.Column width={5}>
              </Grid.Column>
              <Grid.Column width={10}>
                <Segment>
                  <AutoForm
                    schema={createSchemaBridge(schema)}
                    model={data}
                    onSubmit={onSubmit}
                    showInlineError={true}>
                    <AutoFields />
                    <SubmitField className="ui positive" value="Отправить" />
                   </AutoForm>
                </Segment>
              </Grid.Column>
            </Grid>
            <Button color='black' onClick={() => setOpen(false)}>
              Закрыть</Button>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Segment>
  </div>
}

Chat.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
};

function Upload({ pages }) {
  return <div>
    <Segment>
      <h4>Перетащите скан/фото документов сюда</h4>
      <Button
        content="Загрузите с компьютера"
        labelPosition='right'
        icon='upload'
        positive
      />
      <Button
        content="Загрузите с телефона"
        labelPosition='right'
        color='black'
        icon='mobile alternate'
      />
    </Segment>
    <Grid columns={4} divided>
      <Grid.Row>
        {
          pages.map((page, index) => <Grid.Column key={index}>
            <Icon name="window close outline" />
            {page.error && <span className="error">{page.error}</span>}
            <br />
            <img src={page.src} width="150" height="150" />
          </Grid.Column>)
        }

      </Grid.Row>
    </Grid>
  </div>
}


Upload.propTypes = {
  pages: PropTypes.array,
};

// function ClientDossier() {
//   const pagesPasp = [
//     { name: 'Паспорт', src: a1 },
//   ]
//   const panes = [
//     { menuItem: 'Паспорт', render: () => <Tab.Pane><Upload pages={pagesPasp} /></Tab.Pane> },
//   ]
//   return <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />;
// }

function AutoDossier() {
  const pagesPTS = [
    { name: 'ПТС', src: page1 },
    { name: 'ПТС', src: page2, error: 'Проверьте файл' },
    { name: 'ПТС', src: page3 },
  ]
  const pagesDKP = [
    { name: 'ДКП', src: page1 },
  ]
  // const pagesPasp = [
  //   { name: 'Паспорт', src: a1 },
  // ]

  const panes = [
    // { menuItem: 'Паспорт', render: () => <Tab.Pane><Upload pages={pagesPasp} /></Tab.Pane> },
    { menuItem: 'ПТС', render: () => <Tab.Pane><Upload pages={pagesPTS} /></Tab.Pane> },
    { menuItem: 'Договор купли-продажи', render: () => <Tab.Pane><Upload pages={pagesDKP} /></Tab.Pane> },
  ]
  return <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />;
}
function Error() {
  return <Segment>
    <div className="managerComment">
      <h4>Комментарий менеджера</h4>
    Проверьте документ ПТС: не совпадает VIN
    </div>
  </Segment>
}

function ListForm({ pages }) {
  return <div>
  <Segment></Segment>
   <Grid divided='vertically'>
      <Grid.Column width={4}>
        <Segment>
          Загруженные документы
        </Segment>
      </Grid.Column>
      <Grid.Column width={12}>
        <Segment>
          <Segment>
            <Grid columns={3} divided>
              <Grid.Column width={2}>
                <img src={doc1} width="50" height="50" /> 
              </Grid.Column>
              <Grid.Column width={11}>
                Договор№124432.png
                <p>Добавлен 04.02.2021 в 11:46</p>
              </Grid.Column>
              <Grid.Column width={2}>
                <Button color='green'>Скачать</Button>
                <Button color='red'>Удалить</Button>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Grid columns={3} divided>
              <Grid.Column width={2}>
                <img src={doc2} width="55" height="50" /> 
              </Grid.Column>
              <Grid.Column width={11}>
                Договор№54433.png
                <p>Добавлен 02.03.2021 в 12:15</p>
              </Grid.Column>
              <Grid.Column width={2}>
                <Button color='green'>Скачать</Button>
                <Button color='red'>Удалить</Button>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Grid columns={3} divided>
              <Grid.Column width={2}>
                <img src={doc1} width="50" height="50" /> 
              </Grid.Column>
              <Grid.Column width={11}>
                Договор.jpg
                <p>Добавлен 01.03.2021 в 15:23</p>
              </Grid.Column>
              <Grid.Column width={2}>
                <Button color='green'>Скачать</Button>
                <Button color='red'>Удалить</Button>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Grid columns={3} divided>
              <Grid.Column width={2}>
                <img src={doc2} width="55" height="50" /> 
              </Grid.Column>
              <Grid.Column width={11}>
                Согласие супруга.jpg
                <p>Добавлен 28.02.2021 в 11:46</p>
              </Grid.Column>
              <Grid.Column width={2}>
                <Button color='green'>Скачать</Button>
                <Button color='red'>Удалить</Button>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Grid columns={3} divided>
              <Grid.Column width={2}>
                <img src={doc1} width="50" height="50" /> 
              </Grid.Column>
              <Grid.Column width={11}>
                ИНН.jpg
                <p>Добавлен 28.02.2021 в 11:42</p>
              </Grid.Column>
              <Grid.Column width={2}>
                <Button color='green'>Скачать</Button>
                <Button color='red'>Удалить</Button>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Grid columns={3} divided>
              <Grid.Column width={2}>
                <img src={doc1} width="50" height="50" /> 
              </Grid.Column>
              <Grid.Column width={11}>
                Договор№98766.png
                <p>Добавлен 26.02.2021 в 09:57</p>
              </Grid.Column>
              <Grid.Column width={2}>
                <Button color='green'>Скачать</Button>
                <Button color='red'>Удалить</Button>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Grid columns={3} divided>
              <Grid.Column width={2}>
                <img src={doc2} width="55" height="50" /> 
              </Grid.Column>
              <Grid.Column width={11}>
                Согласие супруга.jpg
                <p>Добавлен 24.02.2021 в 19:32</p>
              </Grid.Column>
              <Grid.Column width={2}>
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
        <Grid.Column width="12">
          <Error />
          <AutoDossier />
          <ListForm/>
        </Grid.Column>
        <Grid.Column width="4">
          <ProductForm data={data} setData={setData} />
          <Chat data={data} setData={setData} />
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
