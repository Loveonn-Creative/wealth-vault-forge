const FinalCTA = () => {
  return (
    <section className="py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Build Private Wealth. Your Way.
          </h2>
          
          <p className="text-xl lg:text-2xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the select few who understand that true wealth is built in silence, 
            not in noise.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="#access" 
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg hover:bg-primary-foreground/90 transition-all duration-300 hover:scale-105 text-lg font-semibold"
            >
              Apply for Access →
            </a>
          </div>
          
          <p className="text-sm text-primary-foreground/60 mt-6">
            (Limited to 100 entries per month)
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;