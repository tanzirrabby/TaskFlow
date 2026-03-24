export default function ActivityFeed({ items }) {
  return (
    <aside className="activity-feed">
      <h3>Real-time Activity</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <p>{item.message}</p>
            <small>{new Date(item.at).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </aside>
  );
}
