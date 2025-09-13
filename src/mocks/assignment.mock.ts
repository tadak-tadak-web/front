import type { AssignmentFile } from '@/entities/assignment';
import { delay, http, HttpResponse } from 'msw';
let ASSIGNMENT_MOCKS: AssignmentFile[] = [];

export const assignmentHandler = [
  http.get('/api/assignment/:assignmentId', ({ params }) => {
    const { assignmentId } = params;
    if (assignmentId === 'l2-a1') {
      return HttpResponse.json({ data: ASSIGNMENT_MOCKS });
    }

    return HttpResponse.json({ data: null });
  }),
  http.post('/api/assignment', async () => {
    await delay(5000);
    const newAssignment: AssignmentFile = {
      id: `a${Date.now()}`,
      fileName: 'upload-success.png',
      fileContent: '',
      fileSize: 12345,
    };
    ASSIGNMENT_MOCKS.push(newAssignment);

    return HttpResponse.json({ data: newAssignment }, { status: 201 });
  }),
  http.delete('/api/assignment/:assignmentId', ({ params }) => {
    const { assignmentId } = params;

    const originalLength = ASSIGNMENT_MOCKS.length;

    ASSIGNMENT_MOCKS = ASSIGNMENT_MOCKS.filter(
      assignment => assignment.id !== assignmentId,
    );

    if (ASSIGNMENT_MOCKS.length < originalLength) {
      return new HttpResponse(null, { status: 204 });
    } else {
      return HttpResponse.json(
        { message: '해당 과제를 찾을 수 없습니다.' },
        { status: 404 },
      );
    }
  }),
];
