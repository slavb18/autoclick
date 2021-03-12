import { DossierComponent } from '@ilb/filedossiercomponent/src/index';
import '@ilb/filedossiercomponent/src/index.css';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { useState } from 'react';
import { Container, Form, Grid, Image, Segment } from 'semantic-ui-react';

const data = {
  name: {
    title: 'ФИО покупателя',
    type: 'string',
    value: 'Иванов Петр Сергеевич',
    checkable: true,
    editable: true
  },
  vin: {
    title: 'VIN',
    type: 'string',
    editable: true
  },
  pts: {
    title: 'ПТС',
    type: 'string',
    editable: true
  },
  carPrice: {
    title: 'Стоимость АВТО',
    type: 'string',
    editable: true
  },
  pvSize: {
    title: 'Размер ПВ',
    type: 'string',
    editable: true
  },
  buyerSignature: {
    title: 'Подпись покупателя',
    type: 'image',
    value: 'https://im0-tub-ru.yandex.net/i?id=99b23e74530fb5b02ff085a27db4588e&n=13',
    checkable: true
  },
  sellerSignature: {
    title: 'Подпись продавца',
    type: 'image',
    value: 'https://im0-tub-ru.yandex.net/i?id=eaf00a2ff58f83f4d7f4a200aee16940&n=13',
    checkable: true
  },
  seller: {
    title: 'Наименование продавца',
    type: 'string',
    value: 'ООО "Рога и копыта"',
    checkable: true
  }
};

function DocumentCheckFormInput({
  type,
  name,
  value,
  title,
  editable,
  checkable,
  onInputChange,
  onCorrectCheckChange
}) {
  const RADIO_CORRECT_VALUE = 'correct';
  const RADIO_INCORRECT_VALUE = 'error';
  const [inputValue, setInputValue] = useState(value || '');
  const [radioValue, setRadioValue] = useState('correct');
  const radioName = name + 'Correct';

  const Title = <div style={{ marginBottom: 4, fontWeight: 'bold' }}>{title}</div>;
  let Component = <></>;

  function _onInputChange(e, { value }) {
    setInputValue(value);
    console.log(value);
    onInputChange(name, value);
  }

  function _onRadioChange(e, { value }) {
    console.log(value);
    setRadioValue(value);
    if (value === RADIO_CORRECT_VALUE) {
      onCorrectCheckChange(name, true);
    } else {
      onCorrectCheckChange(name, false);
    }
  }

  switch (type) {
    case 'string':
      Component = (
        <>
          {Title}
          {(editable && <Form.Input onChange={_onInputChange} value={inputValue} />) || (
            <Form.Input
              value={value}
              style={{ opacity: 0.8 }}
              control={(props) => <input {...props} disabled />}
            />
          )}
        </>
      );
      break;
    case 'image':
      Component = (
        <>
          {Title}
          <Image bordered src={value} href={value} target="_blank" as="a" size="tiny" />
        </>
      );
      break;
  }

  return (
    <Segment color={checkable && ((radioValue === RADIO_CORRECT_VALUE && 'green') || 'red')}>
      {Component}
      {checkable && (
        <Form.Group style={{ marginTop: 12, marginBottom: 0 }}>
          <Form.Radio
            name={radioName}
            value={'correct'}
            checked={radioValue === RADIO_CORRECT_VALUE}
            onChange={_onRadioChange}
            label="Верно"
          />
          <Form.Radio
            name={radioName}
            value={'error'}
            checked={radioValue === RADIO_INCORRECT_VALUE}
            onChange={_onRadioChange}
            label="Ошибка"
          />
        </Form.Group>
      )}
    </Segment>
  );
}
function DocumentCheckForm({ data, onSubmit }) {
  const dataEntires = Object.entries(data);

  // initialize formData with values from data
  const [formData, setFormData] = useState(() => {
    const initialFormData = {};
    dataEntires.forEach(([name, content]) => {
      initialFormData[name] = {};
      if (content.value) {
        initialFormData[name].value = content.value;
      } else {
        initialFormData[name].value = '';
      }
      if (content.editable) {
        initialFormData[name].edited = false;
      }
      if (content.checkable) {
        initialFormData[name].isCorrect = true;
      }
    });
    return initialFormData;
  });

  function onInputChange(name, value) {
    const edited = data[name].value !== value;
    setFormData({ ...formData, [name]: { ...formData[name], value, edited } });
  }

  function onCorrectCheckChange(name, isCorrect) {
    setFormData({ ...formData, [name]: { ...formData[name], isCorrect } });
  }

  function onSubmitClick() {
    const formDataEntries = Object.entries(formData);
    const isDocumentInvalid = formDataEntries.some(
      // eslint-disable-next-line no-unused-vars
      ([name, content]) => content.isCorrect === false
    );
    onSubmit({ isDocumentInvalid, data: formData });
  }

  return (
    <Form>
      {dataEntires.map(([name, content]) => (
        <DocumentCheckFormInput
          key={name}
          {...content}
          name={name}
          onInputChange={onInputChange}
          onCorrectCheckChange={onCorrectCheckChange}
        />
      ))}
      <Form.Button type="submit" onClick={onSubmitClick}>
        Сохранить
      </Form.Button>
    </Form>
  );
}

function DocumentCheckPage() {
  const dossierParams = {
    dossierKey: 'teststorekey',
    dossierPackage: 'testmodel',
    dossierCode: 'TEST',
    dossierMode: 'mode1'
  };

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <Head>
        <title>Проверка документа</title>
      </Head>
      <Container style={{ marginTop: 16 }}>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <DossierComponent
                height="calc(100vh - 1rem)"
                basePath="http://localhost:8080"
                dossierParams={dossierParams}
                mode="preview"
              />
            </Grid.Column>
            <Grid.Column>
              <DocumentCheckForm data={data} onSubmit={onSubmit} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}

export default withRouter(DocumentCheckPage);
