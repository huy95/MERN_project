import React from 'react'
import NavBar from '../Landing/NavBar'
import { FiCheckCircle, FiEdit2, FiSearch, FiTrash2 } from 'react-icons/fi'
import './TodoList.css'
const ToDoList = () => {
  return (
    <div>
      <NavBar />
      <main className='page'>
        <div className='page-head'>
          <h1>Your Tasks</h1>
          <div className='tools'>
            <div className='search'>
              <FiSearch className='search-icon' />
              <input type='text' placeholder='Search Tasks here...' />
            </div>
          </div>
           <div className='select'>
                <button className='btn btn-primary'>Add New</button>
                <button className='select-btn'>
                  Not Completed
                  <span className='caret'></span>
                </button>
              </div>
        </div>
        <hr className='divider' />
        <section className='cards'>
          <TaskCard
            title="Watch JJK"
            desc="this is a test"
            date="Web oct 10, 2024"
            status="not completed"
          />
        </section>
      </main>
    </div>
  )
}

export default ToDoList


function TaskCard({ title, desc, date, status }) {
  return (
    <article className='card'>
      <header className='card-top'>
        <h3>{title}</h3>
        <span className='badge badge-red'>{status}</span>
      </header>
      <p className='card-desc'>{desc}</p>
      <footer className='card-foot'>
        <span className='date-pill'>{date}</span>
        <div className='actions'>
          <button className='icon-btn' title='Edit'><FiEdit2 /></button>
          <button className='icon-btn danger' title='Delete'><FiTrash2></FiTrash2></button>
          <button className='icon-btn ok' title='mark completed'><FiCheckCircle /></button>
        </div>
      </footer>
    </article>
  );
}