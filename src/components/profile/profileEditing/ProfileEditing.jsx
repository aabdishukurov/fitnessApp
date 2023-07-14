import React from 'react';
import styles from './profile-editing.module.scss';
import { Input } from './input/Input';
import { Select } from './select/Select';
import { Button } from '../profileUser/button/Button';
import { useNavigate } from 'react-router-dom';

const paragraphs = [
  { id: 1, title: 'Разминка для шеи' },
  { id: 2, title: 'Разминка для кистей' },
  { id: 3, title: 'Разминка для ног' },
  { id: 4, title: 'Разминка для спины' },
  { id: 5, title: 'Разминка для глаз' },
];

export const ProfileEditing = () => {
  const [name, setName] = React.useState('Камилла');
  const [surname, setSurname] = React.useState('Кей');
  const [phone, setPhone] = React.useState('+996 555 000 000');
  const [email, setEmail] = React.useState('camillakey@mail.com');

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div>
      <hr className={styles.hr} />
      <div className={styles.inputs}>
        <Input
          title={`Имя`}
          type={`text`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          title={`Фамилия`}
          type={`text`}
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <Input
          title={`Телефон`}
          type={`text`}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          title={`E-mail`}
          type={`text`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.select_top}>
        <Select title={`Пол`} value={`Женский`} />
      </div>
      <hr className={styles.hr} />
      <div className={styles.select_top}>
        <Select title={`Цель`} value={`Бодрость и Продуктивность`} />
        <div className={styles.warm_up}>
          <h3>Порядок разминок:</h3>
          {paragraphs.map((paragraph) => (
            <p key={paragraph.id}>{paragraph.title}</p>
          ))}
        </div>
      </div>
      <div className={styles.select_top}>
        <Select
          title={`Рабочий режим`}
          value={`8:30 - 17:30. Обед 12:00 - 13:00`}
        />
      </div>
      <hr className={styles.hr} />
      <div className={styles.buttons}>
        <Button title={`Сохранить`} />
        <Button onClick={goHome} title={`Выйти`} />
      </div>
    </div>
  );
};
