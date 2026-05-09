export default function Button(props: { now: () => void; }) {
  return (
    <button onClick={props.now} style={{
      width: '100%', maxWidth: '320px', height: '50px',
      background: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)', borderRadius: '18px', border: 'none',
      marginTop: '0px', color: 'white', cursor: 'pointer', fontWeight: 'bold',
      boxShadow: '0 16px 30px rgba(15, 23, 42, 0.22)', letterSpacing: '0.01em'
    }}> + Add transaction</button>);
}