import React from 'react';
import ConversationItem from './ConversationItem';
import { Button, Grid, Icon, Modal } from 'semantic-ui-react';

const ConversationComponent = () => {
  const [open, setOpen] = React.useState(false);
  const data = [
    {
      id: 1,
      date: '20.02.2021',
      user: { name: 'Василий', age: '20' },
      url: './music/Bethoven.mp3'
    },
    { id: 2, date: '20.02.2021', user: { name: 'Иван', age: '20' }, url: './music/Uno.mp3' },
    {
      id: 3,
      date: '20.02.2021',
      user: { name: 'Илья', age: '20' },
      url: './music/Shelcunchick.mp3'
    },
    { id: 4, date: '20.02.2021', user: { name: 'Буянов', age: '20' }, url: './music/Shnur.mp3' },
    { id: 5, date: '20.02.2021', user: { name: 'Михаил', age: '20' }, url: './music/horse.ogv' }
  ];
  return (
    <>
      <Button onClick={() => setOpen(!open)} content="Звонки" color="green" positive />
      <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>
        <Modal.Header>
          <Grid divided="vertically">
            <Grid.Column width={15}>
              <em>Звонки</em>
            </Grid.Column>
            <Grid.Column width={1}>
              <Icon link name="close" onClick={() => setOpen(false)} />
            </Grid.Column>
          </Grid>
        </Modal.Header>
        <Modal.Content scrolling>
          <Modal.Description>
            <Grid divided="vertically">
              <Grid.Column width={10}>
                <Grid.Row>
                    <div className="container">
                      <table
                        className="table-container"
                        cellPadding="7"
                        cellSpacing="7"
                        border="3"
                        align="center">
                        <thead className="tableThead">
                          <tr>
                            <th>Id</th>
                            <th>Дата</th>
                            <th>Личный менеджер</th>
                            <th>Прослушать</th>
                          </tr>
                        </thead>
                        <tbody className="tableBody">
                          {data.map((item, key) => (
                            <ConversationItem item={item} key={key} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                </Grid.Row>
              </Grid.Column>
            </Grid>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default ConversationComponent;
