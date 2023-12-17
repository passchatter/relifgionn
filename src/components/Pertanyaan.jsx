import { useState } from 'react';

const Pertanyaan = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'Apakah saya bisa memesan desain kustom?',
      answer:
        'Tentu! Kami menyediakan layanan desain kustom. Anda bisa memilih warna, gaya, dan bahkan mengirimkan desain Anda sendiri.',
    },
    {
      id: 2,
      question: 'Berapa lama waktu pembuatan untuk desain kustom?',
      answer:
        'Waktu pembuatan untuk desain kustom bervariasi tergantung pada kompleksitas desain. Biasanya, kami membutuhkan waktu antara 2-4 minggu.',
    },
    {
      id: 3,
      question: 'Apakah tersedia opsi pengiriman internasional?',
      answer:
        'Ya, kami menyediakan layanan pengiriman internasional. Namun, biaya pengiriman dan waktu pengiriman dapat bervariasi tergantung lokasi tujuan.',
    },
    {
      id: 4,
      question: 'Bisakah saya mengubah desain setelah memesan?',
      answer:
        'Kami memiliki kebijakan perubahan desain terbatas setelah pesanan dibuat. Silakan hubungi layanan pelanggan kami untuk informasi lebih lanjut.',
    },
    {
      id: 5,
      question: 'Bagaimana cara melacak status pesanan saya?',
      answer:
        'Setelah pesanan Anda dikirim, Anda akan menerima nomor pelacakan yang dapat digunakan untuk melacak status pengiriman Anda melalui situs kami.',
    },
  ];
  

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <>
    <div className="container">
      
             <div className=" max-w-5xl container mx-auto mt-3 text-slate-950 section">
                <h2 className="text-3xl font-semibold mb-4">FAQ</h2>
                <div className="space-y-10 mt-10  rounded-lg shadow-orange-300 ">
                    {questions.map((q, index) => (
                    <div key={q.id} className="border-b-2 pb-2 border-orange-500/30">
                        <button
                        onClick={() => toggleQuestion(q.id)}
                        className="flex items-center justify-between w-full text-left focus:outline-none"
                        >
                        <span className="text-slate-900">{q.question}</span>
                        <svg
                            className={`w-4 h-4 transition-transform transform ${
                            openQuestion === q.id ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={openQuestion === q.id ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                            />
                        </svg>
                        </button>
                        {openQuestion === q.id && <p className="mt-2 text-[.9rem] pt-3 text-slate-400">{q.answer}</p>}
                    </div>
                    ))}
                </div>
            </div>
      
    </div>
    </>
  );
};

export default Pertanyaan;
