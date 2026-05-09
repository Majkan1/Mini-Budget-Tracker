import { useState } from 'react';
import Title from "./components/Title"
import MainPart from './components/MainParts';
import Button from './Button';
import AddTask from './components/AddTransactionForm';
import TransactionList from './components/TransactionList';
import type Transaction from "./Transaction"
export default function App() {
  
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState<number | ''>(''); 
  const [date, setDate] = useState('');
  const [transactionType, setTransactionType] = useState<'income' | 'expense'>('expense');
  const [category, setCategory] = useState('');

  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const total = income - expenses;

  const handleAction = () => {
   
    if (!title || !amount || !date) {
      alert("Please fill in all fields");
      return;
    }

    const newTransaction: Transaction = {
      id: Date.now(),
      title,
      amount: Number(amount),
      date,
      type: transactionType,
      category
    };

    setTransactions([...transactions, newTransaction]);

    
    setTitle('');
    setAmount('');
    setDate('');
    setCategory('');
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '360px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '14px'
    }}>
      <Title />
      <MainPart
        income={income}
        expenses={expenses}
        total={total}
      />
      <Parent
        title={title}
        setTitle={setTitle}
        amount={amount}
        setAmount={setAmount}
        date={date}
        setDate={setDate}
        transactionType={transactionType}
        setTransactionType={setTransactionType}
        category={category}
        setCategory={setCategory}
        handleAction={handleAction}
      />
      
      <TransactionList transactions={transactions} />
    </div>
  );
}


function Parent(props: {
  title: string;
  setTitle: (value: string) => void;
  date: string;
  setDate: (value: string) => void;
  amount: number | '';
  setAmount: (value: number | '') => void;
  transactionType: 'income' | 'expense';
  setTransactionType: (value: 'income' | 'expense') => void;
  category: string;
  setCategory: (value: string) => void;
  handleAction: () => void;
}) {
  const [show, setShow] = useState(false);
  const Show = () => {
    setShow(true);
  };

  const Hide = () => {
    setShow(false);
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      {!show && <Button now={Show} />}
      {show && <AddTask
        {...props}
        onClose={Hide} />}
    </div>
  );
}