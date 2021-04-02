import React, { useState } from 'react';
import moment from 'moment';
import Badge from 'react-bootstrap/Badge';

const ConversationItem = ({ item, key }) => {
  const { id, date, user, url } = item;

  const [openMedia, setOpenMedia] = useState(false);

  return (
    <tr className="trContainer" key={key}>
      <td>{id}</td>
      <td>{moment(date, 'DD.MM.Y').locale('ru').format('ll')}</td>
      <td>{user.name}</td>
      <td>
        {openMedia && (
          <audio controls>
            <source src={url} type="audio/ogg" />
          </audio>
        )}
        {openMedia && (
          <Badge
            onClick={() => {
              setOpenMedia(!openMedia);
            }}
            pill
            variant="dark">
            {' '}
            X{' '}
          </Badge>
        )}
        {!openMedia && (
          <button
            onClick={() => {
              setOpenMedia(!openMedia);
            }}
            type="submit"
            className="button">
            Прослушать
          </button>
        )}
      </td>
    </tr>
  );
};

export default ConversationItem;
