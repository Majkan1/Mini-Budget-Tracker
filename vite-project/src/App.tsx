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
      
      <List transactions={transactions} />
    </div>
  );
}

function Title() {
  return (
    <div className='Title' style={{ width: '100%', textAlign: 'center' }}>
      <h4 style={{ marginBottom: "6px", color: "#111827", fontSize: '28px', letterSpacing: '-0.04em' }}>Budget Tracker</h4>
      <p style={{ fontSize: "12px", color: "#4b5563", marginTop: "0px", marginBottom: '0px' }}>Track your income and expenses with a cleaner overview</p>
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
      width: '100%',
      maxWidth: '320px',
      background: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)',
      borderRadius: '24px',
      padding: '20px',
      border: '1px solid rgba(255,255,255,0.7)',
      boxShadow: '0 18px 45px rgba(15, 23, 42, 0.12)'
    }}>

      <h6 style={{
        marginTop: '0px', marginLeft: "0px", fontSize: "12px",
        color: "#64748b", marginBottom: "8px", letterSpacing: '0.08em', textTransform: 'uppercase'
      }}>Total Balance</h6>

      <p style={{
        color: "#0f172a", fontSize: "36px", marginTop: "0px",
        marginBottom: "18px", fontWeight: "bold", letterSpacing: '-0.05em'
      }}>${props.total.toFixed(2)}</p>

      <div style={{ display: "flex", gap: "12px", marginTop: "0px" }}>
        <div style={{ width: 'calc(50% - 6px)', borderRadius: '18px', background: '#fff7ed', border: '1px solid #fed7aa', padding: '12px' }}>
          <p style={{ fontSize: '11px', color: '#9a3412', margin: 0, marginBottom: '6px', fontWeight: 'bold' }}>Expenses</p>
          <p style={{ color: '#dc2626', margin: 0, fontWeight: 'bold', fontSize: '18px' }}>${props.expenses.toFixed(2)}</p>
        </div>
        <div style={{
          width: 'calc(50% - 6px)', borderRadius: '18px',
          background: '#ecfeff', border: '1px solid #a5f3fc', padding: '12px'
        }}>
          <p style={{ fontSize: '11px', color: '#155e75', margin: 0, marginBottom: '6px', fontWeight: 'bold' }}>Income</p>
          <p style={{ color: '#0891b2', margin: 0, fontWeight: 'bold', fontSize: '18px' }}>${props.income.toFixed(2)}</p>
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
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
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
    <div className='Button-Add' style={{ marginTop: '0px', borderRadius: '22px', width: '100%', maxWidth: '320px', padding: '18px', border: '1px solid rgba(255,255,255,0.75)', boxShadow: '0 18px 45px rgba(15, 23, 42, 0.10)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: "0px", alignItems: 'center' }}>
        <p style={{ marginTop: "0px", marginBottom: '14px', fontWeight: 'bold', color: '#111827', fontSize: '16px' }}>New Transaction</p>
        <p onClick={props.onClose} style={{
          marginTop: "0px", marginBottom: '14px', cursor: 'pointer', color: '#6b7280', fontSize: '13px'
        }}>Close</p>
      </div>
      
      <div style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
        <button 
          className='Expense' 
          onClick={() => { props.setTransactionType('expense'); }}
          style={{
            width: '50%', height: '40px', 
            border: '1px solid #fecaca',
            backgroundColor: props.transactionType === 'expense' ? '#fee2e2' : '#ffffff',
            borderColor: props.transactionType === 'expense' ? '#f87171' : '#e5e7eb',
            marginRight: '0px',
            borderRadius: '14px',
            fontWeight: 'bold',
            color: '#991b1b'
          }}>Expense</button>

        <button 
          className='Income' 
          onClick={() => { props.setTransactionType('income'); }}
          style={{
            width: '50%', height: '40px',
            border: '1px solid #a5f3fc',
            backgroundColor: props.transactionType === 'income' ? '#cffafe' : '#ffffff',
            borderColor: props.transactionType === 'income' ? '#22d3ee' : '#e5e7eb',
            borderRadius: '14px',
            fontWeight: 'bold',
            color: '#155e75'
          }}>Income</button>
      </div>

      <input
        className='InputForTitle'
        style={{ width: '100%', height: '42px', borderRadius: '14px', border: '1px solid #dbe2ea', marginBottom: '12px', paddingLeft: '12px', boxSizing: 'border-box', background: '#ffffff', color: '#0f172a' }}
        type='text'
        placeholder='What was it for?'
        value={props.title}
        onChange={(e) => { props.setTitle(e.target.value); }}
      />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', gap: '10px' }}>
        <input
          style={{ width: '50%', height: '42px', borderRadius: '14px', border: '1px solid #dbe2ea', paddingLeft: '12px', boxSizing: 'border-box', background: '#ffffff', color: '#0f172a' }}
          type="number"
          value={props.amount}
          placeholder="$ 0.00"
          onChange={(e) => { props.setAmount(e.target.value === '' ? '' : parseFloat(e.target.value)); }}
        />
        <input
          style={{ width: '50%', height: '42px', borderRadius: '14px', border: '1px solid #dbe2ea', paddingLeft: '12px', boxSizing: 'border-box', background: '#ffffff', color: '#0f172a' }}
          type="date"
          value={props.date}
          onChange={(e) => { props.setDate(e.target.value); }}
        />
      </div>
      
      <select 
        value={props.category}
        onChange={(e) => props.setCategory(e.target.value)}
        style={{
          width: '100%', height: '44px', borderRadius: '14px',
          border: '1px solid #dbe2ea', display: 'block',
          marginTop: '0px', marginBottom: '16px', paddingLeft: '10px',
          boxSizing: 'border-box', background: '#ffffff', color: '#0f172a'
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
          width: '100%', borderRadius: '16px', color: 'white',
          marginTop: '4px', height: '46px', border: 'none',
          background: props.transactionType === 'income' ? 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' : 'linear-gradient(135deg, #fb7185 0%, #ef4444 100%)',
          cursor: 'pointer', fontWeight: 'bold', boxShadow: props.transactionType === 'income' ? '0 12px 24px rgba(8, 145, 178, 0.22)' : '0 12px 24px rgba(239, 68, 68, 0.20)'
        }}>
        {props.transactionType === 'income' ? 'Add Income' : 'Add Expense'}
      </button>
    </div>
  );
}

function Button(props: { now: () => void; }) {
  return (
    <button onClick={props.now} style={{
      width: '100%', maxWidth: '320px', height: '50px',
      background: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)', borderRadius: '18px', border: 'none',
      marginTop: '0px', color: 'white', cursor: 'pointer', fontWeight: 'bold',
      boxShadow: '0 16px 30px rgba(15, 23, 42, 0.22)', letterSpacing: '0.01em'
    }}> + Add transaction</button>);
}

function List(props: { transactions: Transaction[] }) {
  if (props.transactions.length === 0) {
    return (
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(248,250,252,0.98) 100%)',
        marginTop: '0px',
        borderRadius: '20px',
        padding: '24px',
        width: '272px',
        textAlign: 'center',
        border: '1px solid #e5e7eb',
        boxShadow: '0 18px 40px rgba(15, 23, 42, 0.10)'
      }}>
        <div style={{
          position: 'absolute',
          top: '-28px',
          right: '-18px',
          width: '96px',
          height: '96px',
          borderRadius: '999px',
          background: 'radial-gradient(circle, rgba(251,191,36,0.28) 0%, rgba(251,191,36,0) 72%)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-34px',
          left: '-24px',
          width: '110px',
          height: '110px',
          borderRadius: '999px',
          background: 'radial-gradient(circle, rgba(20,184,166,0.20) 0%, rgba(20,184,166,0) 72%)'
        }} />
        <div style={{
          width: '58px',
          height: '58px',
          borderRadius: '18px',
          margin: '0 auto 14px auto',
          background: 'linear-gradient(135deg, #111827 0%, #334155 100%)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
          fontWeight: 'bold',
          boxShadow: '0 12px 24px rgba(15, 23, 42, 0.24)',
          position: 'relative'
        }}>
          $ 
        </div>
        <p style={{
          color: '#0f172a',
          margin: '6px 0',
          fontSize: '17px',
          fontWeight: 'bold',
          letterSpacing: '-0.02em',
          position: 'relative'
        }}>
          No transactions yet
        </p>
        <p style={{
          color: '#64748b',
          fontSize: '12px',
          lineHeight: '1.6',
          margin: '6px 0 0 0',
          position: 'relative'
        }}>
          Start building your budget story.
          <br />
          Add your first income or expense above.
        </p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '0px', width: '100%', maxWidth: '320px' }}>
      <h5 style={{ margin: '10px 0', color: '#1f2937' }}>Recent Transactions</h5>
      {props.transactions.map((t) => (
        <div key={t.id} style={{
          background: 'rgba(255, 255, 255, 0.92)',
          borderRadius: '18px',
          padding: '14px',
          marginBottom: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderLeft: `5px solid ${t.type === 'income' ? '#06b6d4' : '#ef4444'}`,
          boxShadow: '0 12px 28px rgba(15, 23, 42, 0.08)'
        }}>
          <div>
            <p style={{ margin: '0 0 6px 0', fontWeight: 'bold', fontSize: '14px', color: '#0f172a' }}>{t.title}</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#64748b' }}>{t.date} • {t.category}</p>
          </div>
          <div>
            <p style={{ 
              margin: '0', 
              fontWeight: 'bold', 
              color: t.type === 'income' ? '#0891b2' : '#dc2626' 
            }}>
              {t.type === 'income' ? '+' : '-'}${t.amount.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
