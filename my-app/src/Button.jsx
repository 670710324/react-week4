import React from 'react';
import Button from './Button';

function App() {
  return (
    <div className="flex gap-3 p-6">
      <Button>บันทึก</Button>
      <Button variant="danger">ลบ</Button>
      <Button variant="ghost">ยกเลิก</Button>
    </div>
  );
}

export default App;