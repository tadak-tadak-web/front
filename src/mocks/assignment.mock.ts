import { http, HttpResponse } from 'msw';
let ASSIGNMENT_MOCKS = [
  {
    id: 'a1',
    fileName: 'react_basics_guide.txt',
    fileContent:
      '리액트의 기본 개념: 컴포넌트, JSX, Props, State에 대한 문서입니다.',
    fileSize: 2048,
  },
  {
    id: 'a2',
    fileName: 'msw_setup_manual.md',
    fileContent:
      '# MSW 설정 가이드\n\n1. `npm install msw --save-dev`\n2. `npx msw init public/ --save`\n\n위 명령어를 순서대로 실행하세요.',
    fileSize: 1024,
  },
  {
    id: 'a3',
    fileName: 'state_management_report.csv',
    fileContent:
      '라이브러리,장점,단점\nRedux,안정적,보일러플레이트 많음\nZustand,간결함,생태계 작음\nRecoil,원자적 상태,아직 불안정',
    fileSize: 3072,
  },
];

export const assignmentHandler = [
  http.get('/api/assignment/:assignmentId', ({ params }) => {
    const { assignmentId } = params;
    if (assignmentId === 'l2-a1') {
      return HttpResponse.json({ data: ASSIGNMENT_MOCKS });
    }

    return HttpResponse.json({ data: null });
  }),
  http.post('/api/assignment', () => {
    // 1. 이 로그가 브라우저 콘솔에 찍히는지 확인합니다.
    const newAssignment = {
      id: `a${Date.now()}`,
      fileName: 'upload-success.png', // 임의의 파일 이름
      fileSize: 12345, // 임의의 파일 크기
    };

    // 프론트엔드가 기대하는 { data: ... } 형식으로 성공 응답을 반환합니다.
    return HttpResponse.json({ data: newAssignment }, { status: 201 });
  }),
  http.delete('/api/assignment/:assignmentId', ({ params }) => {
    const { assignmentId } = params;

    const originalLength = ASSIGNMENT_MOCKS.length;

    ASSIGNMENT_MOCKS = ASSIGNMENT_MOCKS.filter(
      assignment => assignment.id !== assignmentId
    );

    if (ASSIGNMENT_MOCKS.length < originalLength) {
      return new HttpResponse(null, { status: 204 });
    } else {
      return HttpResponse.json(
        { message: '해당 과제를 찾을 수 없습니다.' },
        { status: 404 }
      );
    }
  }),
];
