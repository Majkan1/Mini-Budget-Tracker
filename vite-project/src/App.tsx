import { useState } from 'react';

type Transaction = {
  id: number;
  title: string;
  amount: number;
  date: string;
  type: 'income' | 'expense';
  category: string;
};

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
    <div>
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
      
      <List transactions={transactions} />
    </div>
  );
}

function Title() {
  return (
    <div className='Title'>
      <h4 style={{ marginBottom: "5px", color: "#111827" }}>Budget Tracker</h4>
      <p style={{ fontSize: "10px", color: "#4b5563", marginTop: "5px" }}>Track your income & expenses</p>
    </div>
  );
}

function MainPart(props: {
  income: number;
  expenses: number;
  total: number;
}) {
  return (
    <div style={{
      width: '300px', height: "150px", backgroundColor: "white",
      borderRadius: "10px", padding: '10px',
    }}>

      <h6 style={{
        marginTop: '10px', marginLeft: "10px", fontSize: "13px",
        color: "rgb(203, 213, 225)", marginBottom: "10px"
      }}>Total Balance</h6>

      <p style={{
        color: "black", fontSize: "25px", marginTop: "10px",
        marginBottom: "0px", fontWeight: "bold"
      }}>${props.total.toFixed(2)}</p>

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <div style={{ width: '130px', height: "60px", borderRadius: "10px", border: '1px solid orange', padding: '5px' }}>
          <p style={{ fontSize: '10px', color: 'gray', margin: 0 }}>Expenses</p>
          <p style={{ color: "red", margin: 0, fontWeight: 'bold' }}>${props.expenses.toFixed(2)}</p>
        </div>
        <div style={{
          width: '130px', height: "60px", borderRadius: "10px",
          border: '1px solid orange', padding: '5px'
        }}>
          <p style={{ fontSize: '10px', color: 'gray', margin: 0 }}>Income</p>
          <p style={{ color: "blue", margin: 0, fontWeight: 'bold' }}>${props.income.toFixed(2)}</p>
        </div>
      </div>
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
    <div>
      {!show && <Button now={Show} />}
      {show && <AddTask
        {...props}
        onClose={Hide} />}
    </div>
  );
}

function AddTask(props: {
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
  onClose: () => void;
}) {
  return (
    <div className='Button-Add' style={{ marginTop: '15px', borderRadius: '10px', width: '320px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: "0px" }}>
        <p style={{ marginTop: "0px", fontWeight: 'bold' }}>New Transaction</p>
        <p onClick={props.onClose} style={{
          marginTop: "0px"
          , cursor: 'pointer', color: 'gray'
        }}>Close</p>
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <button 
          className='Expense' 
          onClick={() => { props.setTransactionType('expense'); }}
          style={{
            width: "145px", height: "30px", 
            border: '1px solid gray',
            backgroundColor: props.transactionType === 'expense' ? '#ffebee' : 'white',
            borderColor: props.transactionType === 'expense' ? 'red' : 'gray',
            marginRight: '10px'
          }}>Expense</button>

        <button 
          className='Income' 
          onClick={() => { props.setTransactionType('income'); }}
          style={{
            width: "145px", height: "30px",
            border: '1px solid gray',
            backgroundColor: props.transactionType === 'income' ? '#e8f5e9' : 'white',
            borderColor: props.transactionType === 'income' ? 'green' : 'gray'
          }}>Income</button>
      </div>

      <input
        className='InputForTitle'
        style={{ width: '300px', height: '30px', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '10px', paddingLeft: '5px' }}
        type='text'
        placeholder='What was it for?'
        value={props.title}
        onChange={(e) => { props.setTitle(e.target.value); }}
      />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <input
          style={{ width: '140px', height: '30px', borderRadius: '4px', border: '1px solid #ccc', paddingLeft: '5px' }}
          type="number"
          value={props.amount}
          placeholder="$ 0.00"
          onChange={(e) => { props.setAmount(e.target.value === '' ? '' : parseFloat(e.target.value)); }}
        />
        <input
          style={{ width: '140px', height: '30px', borderRadius: '4px', border: '1px solid #ccc', paddingLeft: '5px' }}
          type="date"
          value={props.date}
          onChange={(e) => { props.setDate(e.target.value); }}
        />
      </div>
      
      <select 
        value={props.category}
        onChange={(e) => props.setCategory(e.target.value)}
        style={{
          width: "310px", height: '35px', borderRadius: '4px',
          border: '1px solid #ccc', display: 'block',
          marginTop: '10px', marginBottom: '15px'
        }}>
        <option value="" disabled hidden>
          Choose a category
        </option>
        <option>Food and Dining</option>
        <option>Transport</option>
        <option>Entertainment</option>
        <option>Shopping</option>
        <option>Bills & Utilities</option>
        <option>Health</option>
        <option>Other</option>
      </select>
      
      <button onClick={() => {
          props.handleAction();
          props.onClose();
        }} 
        style={{
          width: "310px", borderRadius: '8px', color: 'white',
          marginTop: '5px', height: '40px', border: 'none',
          background: props.transactionType === 'income' ? 'rgba(16, 185, 129, 1)' : 'rgba(239, 68, 68, 1)',
          cursor: 'pointer', fontWeight: 'bold'
        }}>
        {props.transactionType === 'income' ? 'Add Income' : 'Add Expense'}
      </button>
    </div>
  );
}

function Button(props: { now: () => void; }) {
  return (
    <button onClick={props.now} style={{
      width: "320px", height: "40px",
      backgroundColor: "black", borderRadius: "10px", border: '1px solid black',
      marginTop: "15px", color: "white", cursor: 'pointer'
    }}> + Add transaction</button>);
}

function List(props: { transactions: Transaction[] }) {
  if (props.transactions.length === 0) {
    return (
      <div style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        marginTop: '15px',
        borderRadius: '14px',
        padding: '22px',
        width: '296px',
        textAlign: 'center',
        border: '1px solid #e5e7eb',
        boxShadow: '0 10px 24px rgba(15, 23, 42, 0.08)'
      }}>
        <div style={{
          width: '46px',
          height: '46px',
          borderRadius: '12px',
          margin: '0 auto 10px auto',
          background: 'linear-gradient(135deg, #111827 0%, #374151 100%)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          fontWeight: 'bold'
        }}>
          $+
        </div>
        <p style={{ color: '#111827', margin: '6px 0', fontSize: '15px', fontWeight: 'bold' }}>
          No transactions yet
        </p>
        <p style={{ color: '#6b7280', fontSize: '12px', margin: '5px 0 14px 0' }}>
          Add your first one above
        </p>
        <button
          style={{
            border: 'none',
            borderRadius: '999px',
            padding: '8px 14px',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#ffffff',
            background: 'linear-gradient(135deg, #0f172a 0%, #1f2937 100%)',
            boxShadow: '0 8px 16px rgba(17, 24, 39, 0.24)',
            cursor: 'pointer'
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          + Add your first transaction
        </button>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '15px', width: '320px' }}>
      <h5 style={{ margin: '10px 0', color: '#1f2937' }}>Recent Transactions</h5>
      {props.transactions.map((t) => (
        <div key={t.id} style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          padding: '10px',
          marginBottom: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderLeft: `5px solid ${t.type === 'income' ? 'green' : 'red'}`
        }}>
          <div>
            <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', fontSize: '14px' }}>{t.title}</p>
            <p style={{ margin: '0', fontSize: '12px', color: 'gray' }}>{t.date} • {t.category}</p>
          </div>
          <div>
            <p style={{ 
              margin: '0', 
              fontWeight: 'bold', 
              color: t.type === 'income' ? 'green' : 'red' 
            }}>
              {t.type === 'income' ? '+' : '-'}${t.amount.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
