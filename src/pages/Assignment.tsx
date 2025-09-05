import {
  CommentList,
  AssignmentForm,
  AssignmentHeader,
  CommentForm,
} from '@/features/assignment';

export default function Assignment() {
  return (
    <main className="min-h-screen bg-gray-100 p-8" aria-labelledby="page-title">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <AssignmentHeader />
        <section
          className="p-6 md:p-8 mb-4"
          aria-labelledby="submission-heading"
        >
          <h2
            id="submission-heading"
            className="text-xl font-semibold text-gray-800 mb-6"
          >
            과제 제출
          </h2>
          <AssignmentForm />
        </section>

        <section className="p-6 md:p-8" aria-labelledby="comments-heading">
          <h2
            id="comments-heading"
            className="text-xl font-semibold text-gray-800 mb-6"
          >
            댓글
          </h2>
          <CommentForm />
          <CommentList />
        </section>
      </div>
    </main>
  );
}
