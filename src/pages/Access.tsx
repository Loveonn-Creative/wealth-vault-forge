import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AccessProtocolFlow from '@/components/AccessProtocolFlow';

const Access = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="space-premium bg-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/10 border border-emerald/20 rounded-full text-emerald text-sm font-medium mb-8">
                <span>🔒</span>
                Exclusive Access Protocol
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                THE SELECTION
                <br />
                <span className="bg-gradient-to-r from-emerald via-gold to-emerald bg-clip-text text-transparent">
                  PROCESS
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                This isn't an investment. It's an upgrade path for your entire wealth strategy.
              </p>
             
             <div className="mt-12 p-6 bg-emerald/10 rounded-lg">
               <p className="text-lg font-semibold text-emerald">
                 A four-gate verification system designed to exclude the unprepared.
               </p>
             </div>
           </div>
         </div>
       </section>

       {/* Access Protocol Flow */}
       <section className="space-premium">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <AccessProtocolFlow />
         </div>
       </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Access;