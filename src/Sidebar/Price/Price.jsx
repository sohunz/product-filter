const Price = () => {
  return (
      <div>
          <p className="font-bold text-xl pb-3 mt-5">Price</p>
          <div className="flex flex-col gap-3">
              <div>
                  <input type="radio" />
                  <label className="px-3">$0 - $50</label>
              </div>
              <div>
                  <input type="radio" />
                  <label className="px-3">$50 - $100</label>
              </div>
              <div>
                  <input type="radio" />
                  <label className="px-3">$100 - $150</label>
              </div>
              <div>
                  <input type="radio" />
                  <label className="px-3">$150 - $200</label>
              </div>
              <div>
                  <input type="radio" />
                  <label className="px-3">$200 - $250</label>
              </div>
          </div>
      </div>
  );
};

export default Price;
