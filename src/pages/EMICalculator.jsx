import { useState } from 'react'

function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000)
  const [interestRate, setInterestRate] = useState(8.5)
  const [loanTenure, setLoanTenure] = useState(5)
  const [emi, setEmi] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount)
    const rate = parseFloat(interestRate) / 12 / 100
    const time = parseFloat(loanTenure) * 12

    if (principal && rate && time) {
      const emiValue = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1)
      const totalAmountValue = emiValue * time
      const totalInterestValue = totalAmountValue - principal

      setEmi(Math.round(emiValue))
      setTotalAmount(Math.round(totalAmountValue))
      setTotalInterest(Math.round(totalInterestValue))
    }
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount)
  }

  const handleReset = () => {
    setLoanAmount(1000000)
    setInterestRate(8.5)
    setLoanTenure(5)
    setEmi(0)
    setTotalInterest(0)
    setTotalAmount(0)
  }

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 animated fadeInUp" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Financial Tool</h4>
          <h1 className="display-4 mb-4">EMI Calculator</h1>
          <p className="mb-0">Calculate your Equated Monthly Installment (EMI) instantly with our easy-to-use calculator. Plan your loans better with accurate EMI calculations.</p>
        </div>
        
        <div className="row g-5">
          <div className="col-xl-8">
            <div className="calculator-card glass rounded-4 p-5 shadow-lg">
              <h3 className="mb-4">Loan Details</h3>
              
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="form-floating mb-4">
                    <input
                      type="number"
                      className="form-control"
                      id="loanAmount"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      min="10000"
                      max="10000000"
                      step="10000"
                    />
                    <label htmlFor="loanAmount">Loan Amount (₹)</label>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="form-floating mb-4">
                    <input
                      type="number"
                      className="form-control"
                      id="interestRate"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      min="1"
                      max="20"
                      step="0.1"
                    />
                    <label htmlFor="interestRate">Interest Rate (%)</label>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="form-floating mb-4">
                    <input
                      type="number"
                      className="form-control"
                      id="loanTenure"
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(e.target.value)}
                      min="1"
                      max="30"
                      step="1"
                    />
                    <label htmlFor="loanTenure">Loan Tenure (Years)</label>
                  </div>
                </div>
                
                <div className="col-md-12">
                  <div className="d-flex gap-3">
                    <button 
                      className="btn btn-primary rounded-pill py-3 px-5 shadow flex-grow-1"
                      onClick={calculateEMI}
                    >
                      <i className="fa fa-calculator me-2"></i> Calculate EMI
                    </button>
                    <button 
                      className="btn btn-secondary rounded-pill py-3 px-5 shadow"
                      onClick={handleReset}
                    >
                      <i className="fa fa-redo me-2"></i> Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-xl-4">
            <div className="result-card glass rounded-4 p-5 shadow-lg">
              <h3 className="mb-4">EMI Results</h3>
              
              {emi > 0 ? (
                <div className="result-items">
                  <div className="result-item mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted">Monthly EMI</span>
                      <span className="fs-3 fw-bold text-primary">{formatCurrency(emi)}</span>
                    </div>
                  </div>
                  
                  <div className="result-item mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted">Total Interest</span>
                      <span className="fs-5 fw-bold text-warning">{formatCurrency(totalInterest)}</span>
                    </div>
                  </div>
                  
                  <div className="result-item mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted">Total Amount</span>
                      <span className="fs-5 fw-bold text-success">{formatCurrency(totalAmount)}</span>
                    </div>
                  </div>
                  
                  <div className="alert alert-info rounded-3 mt-4">
                    <i className="fa fa-info-circle me-2"></i>
                    <small>EMI calculated at {interestRate}% annual interest for {loanTenure} years</small>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted py-5">
                  <i className="fa fa-calculator fa-3x mb-3"></i>
                  <p>Enter loan details and click Calculate EMI to see results</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-12">
            <div className="info-card glass rounded-4 p-4 shadow">
              <h4 className="mb-3">
                <i className="fa fa-lightbulb text-primary me-2"></i>
                About EMI Calculator
              </h4>
              <p className="mb-3">
                An Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. 
                This calculator helps you understand your monthly repayment obligations before taking a loan.
              </p>
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="info-item text-center p-3 rounded-3">
                    <i className="fa fa-shield-alt text-primary fa-2x mb-2"></i>
                    <h6>Accurate Results</h6>
                    <small>Get precise EMI calculations instantly</small>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info-item text-center p-3 rounded-3">
                    <i className="fa fa-chart-line text-primary fa-2x mb-2"></i>
                    <h6>Plan Better</h6>
                    <small>Understand your financial commitments</small>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info-item text-center p-3 rounded-3">
                    <i className="fa fa-clock text-primary fa-2x mb-2"></i>
                    <h6>Save Time</h6>
                    <small>Quick calculations for informed decisions</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EMICalculator
