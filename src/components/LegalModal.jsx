import React from 'react';
import { X } from 'lucide-react';

const LegalModal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center bg-slate-900/60 backdrop-blur-sm overflow-y-auto" onClick={onClose}>
            <div
                className="relative w-full max-w-4xl mx-4 my-8 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-fade-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-t-3xl border-b border-slate-100 dark:border-slate-800">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-all"
                        aria-label="Close"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="px-8 py-8 text-slate-600 dark:text-slate-300">
                    {children}
                </div>
            </div>
        </div>
    );
};

export const PrivacyPolicyContent = () => (
    <div className="space-y-4">
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <p>DevSolutions ("we," "us," or "our") operates the website <strong className="text-slate-900 dark:text-white">dev-solutions.software</strong>. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">1. Information We Collect</h3>
        <p>We may collect information about you in the following ways:</p>

        <h4 className="text-lg font-semibold mt-6 mb-2 text-slate-800 dark:text-slate-100">Personal Data</h4>
        <p>When you fill out our contact form or request a consultation, we collect:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Service interest/selection</li>
            <li>Project details and messages you provide</li>
        </ul>

        <h4 className="text-lg font-semibold mt-6 mb-2 text-slate-800 dark:text-slate-100">Automatically Collected Data</h4>
        <p>When you access our website, we may automatically collect:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>IP address</li>
            <li>Pages visited and time spent</li>
            <li>Referring website or source</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">2. How We Use Your Information</h3>
        <p>We use the collected information for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>To respond to your inquiries and provide consultations</li>
            <li>To deliver and manage our services</li>
            <li>To send you project updates and relevant communications</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">3. Data Sharing & Disclosure</h3>
        <p>We do <strong className="text-slate-900 dark:text-white">not</strong> sell, trade, or rent your personal information to third parties. We may share your data only in the following circumstances:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong className="text-slate-800 dark:text-slate-200">Service providers:</strong> Trusted partners who assist in operating our website and services (e.g., Web3Forms for form submissions), bound by confidentiality agreements.</li>
            <li><strong className="text-slate-800 dark:text-slate-200">Legal requirements:</strong> When required by law, regulation, or legal process.</li>
            <li><strong className="text-slate-800 dark:text-slate-200">Business transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">4. Data Security</h3>
        <p>We implement industry-standard security measures to protect your personal information, including:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>SSL/TLS encryption for data in transit</li>
            <li>Secure form submission handling</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication</li>
        </ul>
        <p>However, no method of electronic transmission or storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">5. Cookies & Tracking</h3>
        <p>Our website may use cookies and similar technologies to enhance your experience. You can control cookies through your browser settings. Disabling cookies may affect certain functionality.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">6. Third-Party Links</h3>
        <p>Our website may contain links to third-party sites (e.g., GitHub, LinkedIn, Twitter). We are not responsible for the privacy practices of these external sites and encourage you to review their policies.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">7. Your Rights</h3>
        <p>Depending on your location, you may have the right to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of promotional communications</li>
            <li>Request data portability</li>
            <li>Withdraw consent at any time</li>
        </ul>
        <p>To exercise any of these rights, contact us at <strong className="text-slate-900 dark:text-white">info@dev-solutions.software</strong>.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">8. Data Retention</h3>
        <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Contact form submissions are retained for the duration of our business relationship plus a reasonable period thereafter.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">9. Children's Privacy</h3>
        <p>Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">10. Changes to This Policy</h3>
        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">11. Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <ul className="list-none pl-0 space-y-2 mb-4">
            <li><strong className="text-slate-800 dark:text-slate-200">Email:</strong> info@dev-solutions.software</li>
            <li><strong className="text-slate-800 dark:text-slate-200">Phone:</strong> +254 703 627-369</li>
            <li><strong className="text-slate-800 dark:text-slate-200">Location:</strong> Nairobi, Kenya</li>
        </ul>
    </div>
);

export const TermsOfServiceContent = () => (
    <div className="space-y-4">
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <p>These Terms of Service ("Terms") govern your use of the website <strong className="text-slate-900 dark:text-white">dev-solutions.software</strong> and the services provided by DevSolutions ("we," "us," or "our"). By accessing our website or engaging our services, you agree to be bound by these Terms.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">1. Services</h3>
        <p>DevSolutions provides technology consulting and development services, including but not limited to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Full-stack web and application development</li>
            <li>Database design and management</li>
            <li>Cloud infrastructure and DevOps</li>
            <li>Cybersecurity and penetration testing</li>
            <li>AI and machine learning solutions</li>
            <li>API development and system integration</li>
        </ul>
        <p>Specific deliverables, timelines, and pricing will be outlined in a separate project agreement or proposal for each engagement.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">2. Use of Website</h3>
        <p>You agree to use our website only for lawful purposes. You must not:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Use the website in any way that violates applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to our systems or data</li>
            <li>Transmit any malicious code, viruses, or harmful content</li>
            <li>Use automated tools to scrape, mine, or extract data from our website</li>
            <li>Impersonate any person or entity through our contact forms</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">3. Intellectual Property</h3>
        <p>All content on this website, including text, graphics, logos, design, and code, is the property of DevSolutions and is protected by applicable intellectual property laws.</p>
        <p className="mt-2">For client projects, intellectual property ownership will be defined in the project agreement. Generally:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Custom code developed for your project is transferred to you upon full payment</li>
            <li>Pre-existing frameworks, libraries, and tools remain the property of their respective owners</li>
            <li>DevSolutions retains the right to use general knowledge and techniques gained during your project</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">4. Project Engagements</h3>
        <h4 className="text-lg font-semibold mt-6 mb-2 text-slate-800 dark:text-slate-100">Proposals & Agreements</h4>
        <p>All projects begin with a free consultation and a detailed proposal. Work commences only after both parties agree to the scope, timeline, and pricing outlined in a written project agreement.</p>

        <h4 className="text-lg font-semibold mt-6 mb-2 text-slate-800 dark:text-slate-100">Payment Terms</h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Payment schedules will be defined in each project agreement</li>
            <li>Late payments may result in work suspension until the balance is cleared</li>
            <li>All fees are quoted in the currency specified in the agreement</li>
        </ul>

        <h4 className="text-lg font-semibold mt-6 mb-2 text-slate-800 dark:text-slate-100">Revisions & Changes</h4>
        <p>Reasonable revisions are included as specified in your project agreement. Significant scope changes may require a revised proposal and additional fees.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">5. Confidentiality</h3>
        <p>We treat all client information, business data, and project details as confidential. We will not disclose your proprietary information to third parties without your consent, except as required by law. This obligation survives the termination of any engagement.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">6. Warranties & Disclaimers</h3>
        <p>Our website and its content are provided on an "as is" and "as available" basis. While we strive for accuracy:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>We do not guarantee that the website will be uninterrupted or error-free</li>
            <li>Information on the website may not always be current or complete</li>
            <li>Results described in testimonials or case studies are specific to those clients and are not guaranteed for every engagement</li>
        </ul>
        <p>For project deliverables, specific warranties will be outlined in your project agreement, including any warranty period for bug fixes after launch.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">7. Limitation of Liability</h3>
        <p>To the fullest extent permitted by law, DevSolutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Your use of or inability to use our website</li>
            <li>Any errors or omissions in website content</li>
            <li>Unauthorized access to your data transmitted through our website</li>
            <li>Service interruptions or downtime</li>
        </ul>
        <p>Our total liability for any project engagement shall not exceed the total fees paid by you for that specific project.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">8. Termination</h3>
        <p>Either party may terminate a project engagement as outlined in the project agreement. In the event of termination:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Payment is due for all work completed up to the termination date</li>
            <li>Completed deliverables will be transferred upon payment</li>
            <li>Confidentiality obligations remain in effect</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">9. Governing Law</h3>
        <p>These Terms shall be governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising from these Terms or our services shall be resolved through good-faith negotiation first, and if necessary, through the courts of Nairobi, Kenya.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">10. Changes to These Terms</h3>
        <p>We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated "Last updated" date. Continued use of our website after changes constitutes acceptance of the revised Terms.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">11. Contact Us</h3>
        <p>If you have any questions about these Terms of Service, please contact us:</p>
        <ul className="list-none pl-0 space-y-2 mb-4">
            <li><strong className="text-slate-800 dark:text-slate-200">Email:</strong> info@dev-solutions.software</li>
            <li><strong className="text-slate-800 dark:text-slate-200">Phone:</strong> +254 703 627-369</li>
            <li><strong className="text-slate-800 dark:text-slate-200">Location:</strong> Nairobi, Kenya</li>
        </ul>
    </div>
);

export default LegalModal;
