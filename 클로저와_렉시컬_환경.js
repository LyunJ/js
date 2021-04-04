const x = 1;

function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}
// outer 함수가 종료되어 실행 컨텍스트가 제거되었지만 inner함수는 [[environment]] 내부 슬롯에 outer함수의 렉시컬 환경을 저장하고 있어 10이 출력된다
const innerFunc = outer();
innerFunc();
