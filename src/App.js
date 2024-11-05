import "./App.css";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js";
import SelectService from "./page/SelectService/SelectService.js";
import BuyInsurance from "./page/BuyInsurance/BuyInsurance";
import CarInfo from "./page/CarInfo/CarInfo.js";
import PolicyOwnerInfo from "./page/PolicyOwnerInfo/PolicyOwnerInfo.js";
import PaymentPage from "./page/PaymentPage/PaymentPage";
import PaymentPageTax from "./page/PaymentPage/PaymentPageTax.js";
import UploadReceipt from "./page/UploadReceipt/UploadReceipt.js";
import UploadReceiptTax from "./page/UploadReceipt/UploadReceiptTax.js";
import DocumentPage from "./page/DocumentPage/DocumentPage.js";
import TaxRenewal from "./page/TaxRenewal/TaxRenewal.js";
import TaxPaymentPage from "./page/TaxPaymentPage/TaxPaymentPage.js";
import TaxSummary from "./page/TaxSummary/TaxSummary.js";
import LoginPage from "./page/LoginPage/LoginPage.js";
import RegisterPage from "./page/RegisterPage/RegisterPage.js";
import OtpPage from "./page/OtpPage/OtpPage.js";
import VerifiedPage from "./page/VerifiedPage/VerifiedPage.js";
import PoliciesPage from "./page/PoliciesPage/PoliciesPage.js";
import TaxPaymentUploadPage from "./page/TaxPaymentUpLoadPage/TaxPaymentPage.js";
import FileUploaderPage from "./page/FileUploaderPage/FileUploaderPage.js";
import ReceiptPage from "./page/ReceiptPage/ReceiptPage.js";
import InsurancePageTaxAndLaw from "./page/insurancePage-taxAndLaw/insurancePagetaxAndLaw.js";
import CarInfoPagetaxAndLaw from "./page/CarInfoPage-taxAndLaw/CarInfoPagetaxAndLaw.js";

import PolicyPagetaxAndLaw from "./page/policyPage-taxAndLaw/policyPagetaxAndLaw";
import PaymenPagetaxAndLaw from "./page/PaymenPage-taxAndLaw/PaymenPagetaxAndLaw.js";

import TaxPaymentPagetaxAndLaw from "./page/TaxPaymentPage-taxAndLaw/TaxPaymentPagetaxAndLaw.js";
import TaxSummaryPagetaxAndLaw from "./page/TaxSummaryPage-taxAndLaw/TaxSummary.js";

import FileUploaderPagetaxAndLaw from "./page/fileUploader-page-taxAndLaw/FileUploaderPage.js";

import UploadReceiptPageTaxAndLaw from "./page/UploadReceiptPage-taxAndLaw/UploadReceipt.js";

import ReceiptPageTaxAndLaw from "./page/ReceiptPage-taxAndLaw/ReceiptPage";

import MemberPage from "./page/MemberPage/MemberPage.js";

import ProfileDetailsPage from "./page/ProfileDetailsPage/ProfileDetailsPage.js";
import MyPolicyPage from "./page/MyPolicyPage/MyPolicyPage.js";
import ResetPasswordPage from "./page/ResetPasswordPage/ResetPassword";

import HomePage  from"./page/homePage/homePage"


import CookiePolicy from "./page/CookiePolicyPage/CookiePolicyPage.js"
import CookiePrivacyPolicy from "./page/CookiePrivacyPolicyPage/CookiePolicyPage.js"
import ReceiptPageTax from "./page/ReceiptPage-tax/ReceiptPage.js"
function AppContent() {
  const location = useLocation(); // ใช้ useLocation ภายใน Router context

  return (
    <div>
      {/* แสดง Navbar ถ้าเส้นทางไม่ใช่ /login-page */}
      {![
        "/login-page",
        "/register-page",
        "/otp-page",
        "/verified-page",
      ].includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buy-insurance" element={<BuyInsurance />} />
        <Route path="/car-info" element={<CarInfo />} />
        <Route path="/policy-ownerInfo" element={<PolicyOwnerInfo />} />
        <Route path="/payment-page" element={<PaymentPage />} />
        <Route path="/payment-pageTax" element={<PaymentPageTax />} />
        <Route path="/upload-receipt" element={<UploadReceipt />} />
        <Route path="/upload-receiptTax" element={<UploadReceiptTax />} />
        <Route path="/document-page" element={<DocumentPage />} />
        <Route path="/tax-renewal" element={<TaxRenewal />} />
        <Route path="/tax-payment-page" element={<TaxPaymentPage />} />
        <Route path="/tax-summary" element={<TaxSummary />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/otp-page" element={<OtpPage />} />
        <Route path="/verified-page" element={<VerifiedPage />} />
        <Route path="/policies-page" element={<PoliciesPage />} />
        <Route path="/fileUploader-Page" element={<FileUploaderPage />} />
        <Route path="/receipt-page" element={<ReceiptPage />} />
        <Route
          path="/insurance-page-taxAndLaw"
          element={<InsurancePageTaxAndLaw />}
        />

        <Route
          path="/carInfo-page-taxAndLaw"
          element={<CarInfoPagetaxAndLaw />}
        />
        <Route
          path="/policy-page-taxAndLaw"
          element={<PolicyPagetaxAndLaw />}
        />
        <Route
          path="/policy-page-taxAndLaw"
          element={<PolicyPagetaxAndLaw />}
        />
        <Route
          path="/paymen-page-taxAndLaw"
          element={<PaymenPagetaxAndLaw />}
        />
        <Route
          path="/tax-payment-page-taxAndLaw"
          element={<TaxPaymentPagetaxAndLaw />}
        />

        <Route
          path="/tax-summary-page-taxAndLaw"
          element={<TaxSummaryPagetaxAndLaw />}
        />

        <Route
          path="/fileUp-loader-page-taxAndLaw"
          element={<FileUploaderPagetaxAndLaw />}
        />
        <Route
          path="/uploadReceipt-page-taxAndLaw"
          element={<UploadReceiptPageTaxAndLaw />}
        />
        <Route
          path="/receipt-page-taxAndLaw"
          element={<ReceiptPageTaxAndLaw />}
        />

        <Route path="/member-page" element={<MemberPage />} />

        <Route path="/profile-details-page" element={<ProfileDetailsPage />} />
        <Route path="/my-policy-page" element={<MyPolicyPage />} />

        <Route path="/reset-password-page" element={<ResetPasswordPage />} />

        
        <Route path="/home-page" element={<HomePage />} />


        <Route path="/cookie-policy-page" element={<CookiePolicy/>} />
        <Route path="/cookie-privacy-policy-page" element={<CookiePrivacyPolicy/>} />
        
        <Route path="/receipt-page-tax" element={<ReceiptPageTax/>} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent /> {/* ใช้ AppContent ภายใน Router */}
    </Router>
  );
}

export default App;
