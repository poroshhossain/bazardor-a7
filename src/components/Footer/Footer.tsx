const Footer = () => {
  const footerItems ={
    title:'বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।',
    des:'সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।'
  }
  return (
    <footer className="py-3  border-t border-t-shadoColor/50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between flex-col sm:flex-row gap-2 text-center">
        <h4 className="text-[12px] text-cForeground/50 ">{footerItems.title}</h4>
        <p className="text-[12px] text-cForeground/50 ">{footerItems.des}</p>
      </div>
    </footer>
  )
}
export default Footer