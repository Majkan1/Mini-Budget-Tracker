interface AddTaskProps {
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
}

export default function AddTask(props: AddTaskProps) {
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