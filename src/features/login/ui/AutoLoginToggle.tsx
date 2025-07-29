export default function AutoLoginToggle() {
  return (
    <div className="flex">
      <input type="checkbox" id="auto-login" />
      <label htmlFor="auto-login" className="text-lg ml-2">
        로그인 상태 유지
      </label>
    </div>
  );
}
