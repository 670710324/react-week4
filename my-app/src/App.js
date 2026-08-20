import ProfileCard from './Component/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'นฤพล บุญรักษา', nickname: 'เฟิร์ส',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['เล่นกีฬา', 'หมา'] },
  { id: 2, name: 'ธนพล มุ่งมั่น', nickname: 'เอก', 
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['เล่นเกม ', 'แมว'] },
  { id: 3, name: 'พิมพ์ชนก สดใส', nickname: 'พิม', 
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['อ่านหนังสือ', 'นก'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;