import {
  Modal,
  Button,
  Form,
  Segment,
  Grid,
  Tab,
  Icon,
  Menu,
  MenuItem,
  Image,
  List
} from 'semantic-ui-react';
import { AutoForm } from 'uniforms-semantic';
import { createSchemaBridge } from '../libs/uniforms';
import PropTypes from 'prop-types';
import React from 'react';
import { AutoFields, SubmitField } from 'uniforms-semantic';
import Link from 'next/link';

import page1 from './dog/page-1.jpg';
import page2 from './dog/page-2.jpg';
import page3 from './dog/page-3.jpg';
import a1 from './dog/a1.png';
import doc1 from './dog/document.jpg';
import doc2 from './dog/document2.png';

function ProductForm({ data, setData }) {
  const [open, setOpen] = React.useState(false);
  const onSubmit = (formData) => {
    setOpen(false);
    setData(formData);
  };
  const schema = {
    title: 'Параметры продукта',
    type: 'object',
    properties: {
      productAmount: { type: 'string', title: 'Стоимость авто' },
      downPayment: { type: 'string', title: 'Первоначальный взнос' },
      period: { type: 'string', title: 'Срок' }
    },
    required: ['productAmount', 'downPayment', 'period', 'payment']
  };

  return (
    <Segment>
      <List.Item>
        <List.Content>
          <h1>Подобранный продукт</h1>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <label>Срок: </label>
        </List.Content>
        <List.Content>
          <label>{data.period} мес.</label>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <label>Ставка: </label>
        </List.Content>
        <List.Content>
          <label>{data.rate} %</label>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <label>Платеж: </label>
        </List.Content>
        <List.Content>
          <label>{data.payment} ₽</label>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <label>Стоимость авто: </label>
        </List.Content>
        <List.Content>
          <label>{data.productAmount} ₽</label>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <label>Первоначальный взнос: </label>
        </List.Content>
        <List.Content>
          <label>{data.downPayment} ₽</label>
        </List.Content>
      </List.Item>

      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button content="Подобрать продукт" labelPosition="right" icon="calculator" positive />
        }>
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
              <Button color="black" onClick={() => setOpen(false)}>
                Закрыть
              </Button>
            </AutoForm>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Segment>
  );
}

ProductForm.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func
};

function Chat({ data, setData }) {
  const [open, setOpen] = React.useState(false);
  const onSubmit = (formData) => {
    setOpen(false);
    setData(formData);
  };
  const schema = {
    title: 'Сообщения',
    type: 'object',
    properties: {
      message: { type: 'string', title: 'Сообщения' }
    },
    required: ['message']
  };

  return (
    <div>
      <List horizontal>
        <List.Item>
          <List.Content>
            <Modal
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              trigger={<Button content="Сообщения" color="green" positive />}>
              <Modal.Header>
                <Grid divided="vertically">
                  <Grid.Column width={15}>
                    <em>Сообщения</em>
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <Icon link name="close" onClick={() => setOpen(false)} />
                  </Grid.Column>
                </Grid>
              </Modal.Header>
              <Modal.Content scrolling>
                <Modal.Description>
                  <Grid divided="vertically">
                    <Grid.Column width={5}>
                      <i>4 участника, 2 участника онлайн...</i>
                    </Grid.Column>
                    <Grid.Column width={10}>
                      <Segment>
                        <Segment color="green">
                          <p align="left">15:02</p>
                          <p>Добрый день! Вот здесь ошибка:</p>
                          <img src={page2} width="150" height="150" />
                        </Segment>
                        <Segment color="orange">
                          <p align="right">16:53</p>
                          <p>Здравствуйте!</p>
                        </Segment>
                        <Segment color="orange">
                          <p align="right">16:54</p>
                          <p>Можете подсказать, какая ошибка?</p>
                          <p>И вот паспорт</p>
                          <img src={a1} width="150" height="150" />
                        </Segment>
                        <Segment color="green">
                          <p align="left">17:02</p>
                          <p>Добрый день!</p>
                        </Segment>
                      </Segment>
                    </Grid.Column>
                  </Grid>
                </Modal.Description>
              </Modal.Content>
              <Modal.Content>
                <Grid divided="vertically">
                  <Grid.Column width={5}></Grid.Column>
                  <Grid.Column width={10}>
                    <Segment>
                      <AutoForm
                        schema={createSchemaBridge(schema)}
                        model={data}
                        onSubmit={onSubmit}
                        showInlineError={true}>
                        <Grid divided="vertically">
                          <Grid.Column width={2}>
                            <Icon link name="paperclip" size="big" />
                          </Grid.Column>
                          <Grid.Column width={12}>
                            <input
                              type="text"
                              required
                              placeholder="Введите ваше сообщение..."
                              name="Message"
                            />
                          </Grid.Column>
                          <Grid.Column width={2}>
                            <p>
                              <Button icon="checkmark" color="green" />
                            </p>
                          </Grid.Column>
                        </Grid>
                      </AutoForm>
                    </Segment>
                  </Grid.Column>
                </Grid>
              </Modal.Content>
            </Modal>
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
}

Chat.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func
};

function MenuForm() {
  return (
    <div>
      <Menu icon='labeled' fluid widths={3}>
        <Menu.Item
          icon = "edit outline"
          name="Подать заявку"
          href="form"
        />
        <Menu.Item
          icon = "home"
          name="Список заявок"
          href="listOfApplications"
        />
      </Menu>
    </div>
  );
}

function Upload({ pages }) {
  return (
    <div>
    <Segment>
      <List horizontal>
        <h4>Перетащите скан/фото документов сюда</h4>
          <List.Item>
            <List.Content>
              <Button
                content="Загрузите с компьютера"
                labelPosition="right"
                icon="upload" positive
              />
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <Button
                content="Загрузите с телефона"
                labelPosition="right"
                color="black"
                icon="mobile alternate"
              />
            </List.Content>
          </List.Item>
        </List>
    </Segment>
            <Grid columns={4} divided>
              <Grid.Row>
                {pages.map((page, index) => (
                  <Grid.Column key={index}>
                    <Icon name="window close outline" />
                    {page.error && <span className="error">{page.error}</span>}
                    <br />
                    <img src={page.src} width="150" height="150" />
                  </Grid.Column>
                ))}
              </Grid.Row>
            </Grid>
    </div>
  );
}

Upload.propTypes = {
  pages: PropTypes.array
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
    { name: 'ПТС', src: page3 }
  ];
  const pagesDKP = [{ name: 'ДКП', src: page1 }];
  // const pagesPasp = [
  //   { name: 'Паспорт', src: a1 },
  // ]

  const panes = [
    // { menuItem: 'Паспорт', render: () => <Tab.Pane><Upload pages={pagesPasp} /></Tab.Pane> },
    {
      menuItem: 'ПТС',
      render: () => (
        <Tab.Pane>
          <Upload pages={pagesPTS} />
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Договор купли-продажи',
      render: () => (
        <Tab.Pane>
          <Upload pages={pagesDKP} />
        </Tab.Pane>
      )
    }
  ];
  return <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />;
}
function Error() {
  return (
    <Segment>
      <div className="managerComment">
        <h4>Комментарий менеджера</h4>
        Проверьте документ ПТС: не совпадает VIN
      </div>
    </Segment>
  );
}

function ListForm() {
  return (
    <div>
      <Grid stackable columns={2}>
        <Grid.Column width={3}>
          <Segment>Загруженные документы</Segment>
        </Grid.Column>
        <Grid.Column width={13}>
          <Segment>
            <List divided verticalAlign="middle">
              <List.Item>
                <List.Content floated="right">
                  <Button.Group vertical floated="right">
                    <Button color="green" content="Скачать" labelPosition="right" icon="download" />
                    <Button
                      color="black"
                      content="Удалить"
                      labelPosition="right"
                      icon="trash alternate"
                    />
                  </Button.Group>
                </List.Content>
                <Image doc src={doc1} width="50" height="50" />
                <List.Content>
                  Договор№124432.png<p>Добавлен 04.02.2021 в 11:46</p>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated="right">
                  <Button.Group vertical floated="right">
                    <Button color="green" content="Скачать" labelPosition="right" icon="download" />
                    <Button
                      color="black"
                      content="Удалить"
                      labelPosition="right"
                      icon="trash alternate"
                    />
                  </Button.Group>
                </List.Content>
                <Image doc src={doc2} width="55" height="50" />
                <List.Content>
                  Договор№54433.png<p>Добавлен 02.03.2021 в 12:15</p>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated="right">
                  <Button.Group vertical floated="right">
                    <Button color="green" content="Скачать" labelPosition="right" icon="download" />
                    <Button
                      color="black"
                      content="Удалить"
                      labelPosition="right"
                      icon="trash alternate"
                    />
                  </Button.Group>
                </List.Content>
                <Image doc src={doc1} width="50" height="50" />
                <List.Content>
                  Договор.jpg<p>Добавлен 01.03.2021 в 15:23</p>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated="right">
                  <Button.Group vertical floated="right">
                    <Button color="green" content="Скачать" labelPosition="right" icon="download" />
                    <Button
                      color="black"
                      content="Удалить"
                      labelPosition="right"
                      icon="trash alternate"
                    />
                  </Button.Group>
                </List.Content>
                <Image doc src={doc2} width="55" height="50" />
                <List.Content>
                  Согласие супруга.jpg<p>Добавлен 28.02.2021 в 11:46</p>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated="right">
                  <Button.Group vertical floated="right">
                    <Button color="green" content="Скачать" labelPosition="right" icon="download" />
                    <Button
                      color="black"
                      content="Удалить"
                      labelPosition="right"
                      icon="trash alternate"
                    />
                  </Button.Group>
                </List.Content>
                <Image doc src={doc1} width="50" height="50" />
                <List.Content>
                  ИНН.jpg<p>Добавлен 28.02.2021 в 11:42</p>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated="right">
                  <Button.Group vertical floated="right">
                    <Button color="green" content="Скачать" labelPosition="right" icon="download" />
                    <Button
                      color="black"
                      content="Удалить"
                      labelPosition="right"
                      icon="trash alternate"
                    />
                  </Button.Group>
                </List.Content>
                <Image doc src={doc1} width="50" height="50" />
                <List.Content>
                  Договор№98766.png<p>Добавлен 26.02.2021 в 09:57</p>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated="right">
                  <Button.Group vertical floated="right">
                    <Button color="green" content="Скачать" labelPosition="right" icon="download" />
                    <Button
                      color="black"
                      content="Удалить"
                      labelPosition="right"
                      icon="trash alternate"
                    />
                  </Button.Group>
                </List.Content>
                <Image doc src={doc2} width="55" height="50" />
                <List.Content>
                  Согласие супруга.jpg<p>Добавлен 24.02.2021 в 19:32</p>
                </List.Content>
              </List.Item>
            </List>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default function Cabinet(props) {
  const { data: serverData } = props;
  const [data, setData] = React.useState(serverData);

  // const handler = (formData) => alert(JSON.stringify(formData));

  return (
    <Segment.Group vertical>
      <Segment>
        <MenuForm />
      </Segment>
      <Segment>
        <Error />
      </Segment>
      <Segment>
        <Grid stackable columns={2}>
          <Grid.Column width={12}>
            <AutoDossier />
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment.Group>
              <Segment basic>
                <ProductForm data={data} setData={setData} />
              </Segment>
              <Segment>
                <Chat data={data} setData={setData} />
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <ListForm />
      </Segment>
    </Segment.Group>
  );
}

Cabinet.propTypes = {
  schema: PropTypes.object,
  data: PropTypes.object
};

export async function getServerSideProps() {
  const schema = {};
  const data = {
    period: '60',
    rate: '11',
    payment: '25231',
    productAmount: '1200000',
    downPayment: '200000'
  };

  const props = { schema, data };

  return { props };
}
