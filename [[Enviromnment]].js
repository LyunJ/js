// 함수 객체의 [[Environment]] 내부 슬롯에 현재 실행중인 실행 컨텍스트의 렉시컬 환경의 참조를 저장한다
// 객체가 존재하는 한 상위 스코프를 기억한다

const x = 1;

function foo() {
  const x = 10;

  bar();
}

function bar() {
  console.log(x);
}

foo();
bar();
