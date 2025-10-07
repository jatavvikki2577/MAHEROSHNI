import React, { useState } from "react";

// Single-file React component (TailwindCSS utility classes assumed available)
// Usage: Drop this component into a React app (create-react-app / Vite) with Tailwind configured.

export default function MaheroshniWebsite() {
  const [route, setRoute] = useState("home");
  const [lang, setLang] = useState("en");

  const t = (en, hi) => (lang === "hi" ? hi : en);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-indigo-50 font-sans text-slate-800">
      <header className="max-w-7xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xl">M</div>
          <div>
            <h1 className="text-2xl font-extrabold">Maheroshni Micro Service Foundation</h1>
            <p className="text-sm opacity-70">CIN: U88900UP2024NPL208817</p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <button onClick={() => setRoute("home")} className={`px-3 py-2 rounded-md ${route==='home'?'bg-white shadow':'bg-white/60'}`}>
            {t("Home","होम")}
          </button>
          <button onClick={() => setRoute("about")} className={`px-3 py-2 rounded-md ${route==='about'?'bg-white shadow':'bg-white/60'}`}>
            {t("About","हमारे बारे में")}
          </button>
          <button onClick={() => setRoute("services")} className={`px-3 py-2 rounded-md ${route==='services'?'bg-white shadow':'bg-white/60'}`}>
            {t("Services","सेवाएँ")}
          </button>
          <button onClick={() => setRoute("apply")} className={`px-3 py-2 rounded-md ${route==='apply'?'bg-white shadow':'bg-white/60'}`}>
            {t("Apply","आवेदन करें")}
          </button>
          <button onClick={() => setRoute("contact")} className={`px-3 py-2 rounded-md ${route==='contact'?'bg-white shadow':'bg-white/60'}`}>
            {t("Contact","संपर्क करें")}
          </button>

          <select value={lang} onChange={e => setLang(e.target.value)} className="ml-3 rounded-md px-2 py-1">
            <option value="en">EN</option>
            <option value="hi">HI</option>
          </select>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {route === "home" && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/70 p-8 rounded-2xl shadow">
            <div>
              <h2 className="text-3xl font-bold mb-4">{t("Serving communities with friendly micro-loans","गैर-लाभ के लिये माइक्रो-लोन, समुदायों की सेवा")}</h2>
              <p className="mb-6 opacity-80">
                {t(
                  "Maheroshni provides individual and group loans to low-income households with simple processes and humane terms.",
                  "Maheroshni गरीब परिवारों को व्यक्तिगत और समूह ऋण सरल प्रक्रिया और मानव-सम्मत शर्तों पर देती है।"
                )}
              </p>

              <div className="flex gap-3">
                <button onClick={() => setRoute('apply')} className="px-5 py-2 rounded-lg bg-amber-400 shadow font-semibold">{t('Apply for Loan','ऋण के लिए आवेदन')}</button>
                <button onClick={() => setRoute('about')} className="px-5 py-2 rounded-lg bg-white border">{t('Learn More','और जानें')}</button>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1542223616-1a7f4d0f7f5b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder')] bg-cover bg-center"></div>
            </div>
          </section>
        )}

        {route === 'about' && (
          <section className="mt-8 bg-white/70 p-8 rounded-2xl shadow">
            <h2 className="text-2xl font-bold mb-4">{t('About Us','हमारे बारे में')}</h2>
            <p className="mb-4 opacity-80">
              {t('Maheroshni Micro Service Foundation is registered to provide microfinance services to individuals and groups. We focus on accessible credit, financial education and empowering low-income customers.','Maheroshni Micro Service Foundation व्यक्तिगत और समूहों को माइक्रोफाइनेंस सेवाएँ देने के लिए पंजीकृत है। हम सुलभ क्रेडिट, वित्तीय शिक्षा और निम्न-आय वर्ग के सशक्तिकरण पर ध्यान देते हैं।')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 rounded-lg bg-amber-50">
                <h3 className="font-semibold">{t('Chairperson & Director','अध्यक्ष और निदेशक')}</h3>
                <ul className="mt-2">
                  <li>VIKKI KUMAR — {t('Chairperson','अध्यक्ष')}</li>
                  <li>REKHA — {t('Director','निदेशक')}</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-indigo-50">
                <h3 className="font-semibold">{t('Registration','पंजीकरण')}</h3>
                <p className="mt-2">CIN: U88900UP2024NPL208817</p>
              </div>
            </div>
          </section>
        )}

        {route === 'services' && (
          <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard title={t('Individual Loans','व्यक्तिगत ऋण')} desc={t('Small personal loans with flexible repayment options.','लचीले पुनर्भुगतान विकल्पों के साथ छोटे व्यक्तिगत ऋण।')} />
            <ServiceCard title={t('Group Loans','समूह ऋण')} desc={t('Loans for self-help groups and joint-liability groups.','सेल्फ-हेल्प समूहों और संयुक्त-दायित्व समूहों के लिये ऋण।')} />
            <ServiceCard title={t('Financial Literacy','वित्तीय साक्षरता')} desc={t('Training and support to manage money, savings and credit.','पैसे, बचत और क्रेडिट प्रबंधन हेतु प्रशिक्षण और समर्थन।')} />
          </section>
        )}

        {route === 'apply' && (
          <section className="mt-8 bg-white/80 p-8 rounded-2xl shadow max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">{t('Loan Application','ऋण आवेदन पत्र')}</h2>
            <ApplyForm language={lang} onSuccess={() => alert(t('Application submitted (demo). We will contact you at the email provided.','आवेदन जमा कर दिया गया (डेमो)। हम दी गई ईमेल पर संपर्क करेंगे।'))} />
          </section>
        )}

        {route === 'contact' && (
          <section className="mt-8 bg-white/80 p-8 rounded-2xl shadow max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">{t('Contact Us','संपर्क करें')}</h2>
            <p className="mb-2">{t('Email','ईमेल')}: <a href="mailto:mrmsfoundation1@gmail.com" className="underline">mrmsfoundation1@gmail.com</a></p>
            <p className="mb-2">{t('Registered CIN','पंजीकृत CIN')}: U88900UP2024NPL208817</p>

            <div className="mt-4">
              <ContactForm />
            </div>
          </section>
        )}
      </main>

      <footer className="mt-12 border-t pt-6 bg-white/60">
        <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Maheroshni Micro Service Foundation — CIN U88900UP2024NPL208817</p>
          <p className="text-sm">{t('Contact','संपर्क')}: <a href="mailto:mrmsfoundation1@gmail.com" className="underline">mrmsfoundation1@gmail.com</a></p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-white shadow">
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="opacity-80">{desc}</p>
      <div className="mt-4">
        <button className="px-4 py-2 rounded-lg bg-amber-300">Learn more</button>
      </div>
    </div>
  );
}

function ApplyForm({ language, onSuccess }) {
  const [form, setForm] = useState({ name: "", email: "", amount: "", type: "individual" });
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name) e.name = 'Required';
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.amount || Number(form.amount) <= 0) e.amount = 'Enter valid amount';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function submit(e) {
    e.preventDefault();
    if (!validate()) return;
    // Demo only: in production, send to backend API
    onSuccess();
    setForm({ name: "", email: "", amount: "", type: "individual" });
  }

  return (
    <form onSubmit={submit} className="grid grid-cols-1 gap-4">
      <label>
        <div className="text-sm">{language==='hi'?'नाम':'Name'}</div>
        <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full rounded-md p-2 border" />
        {errors.name && <div className="text-xs text-red-600">{errors.name}</div>}
      </label>

      <label>
        <div className="text-sm">Email</div>
        <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full rounded-md p-2 border" />
        {errors.email && <div className="text-xs text-red-600">{errors.email}</div>}
      </label>

      <label>
        <div className="text-sm">{language==='hi'?'राशि (₹)':'Amount (₹)'}</div>
        <input value={form.amount} onChange={e=>setForm({...form,amount:e.target.value})} type="number" className="w-full rounded-md p-2 border" />
        {errors.amount && <div className="text-xs text-red-600">{errors.amount}</div>}
      </label>

      <label>
        <div className="text-sm">{language==='hi'?'प्रकार':'Type'}</div>
        <select value={form.type} onChange={e=>setForm({...form,type:e.target.value})} className="w-full rounded-md p-2 border">
          <option value="individual">{language==='hi'?'व्यक्तिगत':'Individual'}</option>
          <option value="group">{language==='hi'?'समूह':'Group'}</option>
        </select>
      </label>

      <div className="flex gap-3">
        <button type="submit" className="px-4 py-2 rounded-lg bg-indigo-500 text-white">{language==='hi'?'जमा करें':'Submit'}</button>
        <button type="button" onClick={()=>setForm({name:'',email:'',amount:'',type:'individual'})} className="px-4 py-2 rounded-lg bg-white border">{language==='hi'?'रीसेट':'Reset'}</button>
      </div>
    </form>
  );
}

function ContactForm() {
  const [data, setData] = useState({ name: "", message: "", email: "" });
  function send(e) {
    e.preventDefault();
    alert('Demo: Message saved locally. In production, configure an API to receive messages.');
    setData({ name: "", message: "", email: "" });
  }

  return (
    <form onSubmit={send} className="grid gap-3">
      <input placeholder="Name" value={data.name} onChange={e=>setData({...data,name:e.target.value})} className="p-2 rounded-md border" />
      <input placeholder="Email" value={data.email} onChange={e=>setData({...data,email:e.target.value})} className="p-2 rounded-md border" />
      <textarea placeholder="Message" value={data.message} onChange={e=>setData({...data,message:e.target.value})} className="p-2 rounded-md border" />
      <div>
        <button className="px-4 py-2 rounded-md bg-amber-400">Send</button>
      </div>
    </form>
  );
}