import styles from './components/home.module.css'
import { ChangeEvent, useState } from 'react'
import { IData } from './interfaces';
import { data } from './constants';

function App(): JSX.Element {

  const [title, setTitle] = useState<string>();
  const [arr, setArr] = useState<IData[]>(data);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value)
  }

  const handleSubmit = (): void => {
    if (!title?.length) return
    const newDate = {
      title,
      id: new Date().getTime(),
      description: '',
    }
    setArr([...arr, newDate])
    setTitle('')
    console.log(title);

  }

  const deleteItem = (id: number): void => {
    const newDate = arr.filter(c => c.id !== id)
    setArr(newDate)
  }

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>APP Todo</h1>
      <input placeholder='Enter todo' className={styles.input} type="text" value={title} onChange={changeHandler} />
      <button onClick={handleSubmit} className={styles.button}>Add Todo</button>
      <div className={styles.card}>
        {arr.map(c => (
          <div key={c.id} className={styles.cardItem}>
            <p>{c.title}</p>
            <div className={styles.delBtn}>
              <button onClick={() => deleteItem(c.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
