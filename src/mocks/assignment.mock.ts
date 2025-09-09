import { http, HttpResponse } from 'msw';
let ASSIGNMENT_MOCKS = [
  {
    id: 'a1',
    fileName: 'react_basics_guide.txt',
    fileContent:
      '리액트의 기본 개념: 컴포넌트, JSX, Props, State에 대한 문서입니다.',
  },
  {
    id: 'a2',
    fileName: 'msw_setup_manual.md',
    fileContent:
      '# MSW 설정 가이드\n\n1. `npm install msw --save-dev`\n2. `npx msw init public/ --save`\n\n위 명령어를 순서대로 실행하세요.',
  },
  {
    id: 'a3',
    fileName: 'state_management_report.csv',
    fileContent:
      '라이브러리,장점,단점\nRedux,안정적,보일러플레이트 많음\nZustand,간결함,생태계 작음\nRecoil,원자적 상태,아직 불안정',
  },
];

export const assignmentHandler = [
  //특정 강의의 특정 과제 조회
  http.get('/api/lecture/:lectureId/assignment/:assignmentId', () => {
    return HttpResponse.json({ data: ASSIGNMENT_MOCKS });
  }),
  http.post('/api/lecture/:lectureId/assignment', async ({ request }) => {
    const formData = await request.formData();
    const file = formData.get('file');
    if (!file || !(file instanceof File)) {
      return HttpResponse.json(
        { message: '제목과 파일이 필요합니다.' },
        { status: 400 }
      );
    }

    const newAssignment = {
      id: `a${Date.now()}`,
      fileName: file.name,
      fileContent: `(업로드된 파일: ${file.name}, 크기: ${file.size} bytes)`,
    };

    ASSIGNMENT_MOCKS.unshift(newAssignment);

    return HttpResponse.json(newAssignment, { status: 201 });
  }),
  http.delete(
    '/api/lecture/:lectureId/assignment/:assignmentId',
    ({ params }) => {
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
    }
  ),
];
