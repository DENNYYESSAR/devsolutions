// Unique images for service detail pages (Unsplash)
const img = {
    // Web Development
    webHero: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
    webResponsive: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    webPerformance: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    webConversion: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    // Database
    dbHero: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
    dbSchema: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&q=80',
    dbHighAvail: 'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?w=800&q=80',
    dbMigration: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80',
    // Cloud & DevOps
    cloudHero: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    cloudArch: 'https://images.unsplash.com/photo-1536148935331-408321065b18?w=800&q=80',
    cloudCiCd: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80',
    cloudContainers: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80',
    // Cybersecurity
    secHero: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
    secPentest: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
    secVuln: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&q=80',
    secCompliance: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80',
    // AI/ML
    aiHero: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    aiPredictive: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80',
    aiAutomation: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    aiNlp: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&q=80',
    // API Development
    apiHero: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200&q=80',
    apiDesign: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
    apiIntegration: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
    apiWorkflow: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
};

const serviceDetails = {
    'web-development': {
        slug: 'web-development',
        title: 'Full-Stack Web Development',
        tagline: 'High-performance applications built to convert, engage, and scale.',
        heroImage: img.webHero,
        overview: 'Modern web applications should go beyond aesthetics. Our full-stack development process focuses on speed, scalability, and seamless user experience, ensuring every pixel and every endpoint works toward your business goals.',
        highlights: [
            { stat: '99.9%', label: 'Uptime Guarantee' },
            { stat: '<1s', label: 'Average Load Time' },
            { stat: '3x', label: 'Conversion Uplift' },
        ],
        sections: [
            {
                heading: 'Responsive & Adaptive Design',
                body: 'Every application is meticulously crafted to perform flawlessly across all devices, from desktop monitors to mobile screens. Fluid layouts, modern CSS techniques, and component-driven architecture ensure your users get a consistent, premium experience regardless of how they access your product.',
                image: img.webResponsive,
            },
            {
                heading: 'Performance Engineering',
                body: 'Speed is critical to user retention and SEO ranking. Through code splitting, lazy loading, image optimization, edge caching, and server-side rendering, sub-second load times become the standard. Every millisecond of performance is measured, tested, and optimized throughout the development lifecycle.',
                image: img.webPerformance,
            },
            {
                heading: 'Conversion-Focused Architecture',
                body: 'User flows are architected with conversion in mind. A/B testing frameworks, analytics integration, strategic CTA placement, and optimized form flows ensure your web application does not just attract visitors but transforms them into paying customers.',
                image: img.webConversion,
            },
        ],
        technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'],
        process: [
            { step: 'Discovery', desc: 'Deep analysis of your business goals, target audience, and competitive landscape.' },
            { step: 'Architecture', desc: 'System architecture, database schema, API design, and component structure are mapped out.' },
            { step: 'Development', desc: 'Agile sprints with weekly demos, continuous testing, and thorough code reviews.' },
            { step: 'Launch & Optimize', desc: 'Deployment, monitoring, and continuous optimization of performance and conversion metrics.' },
        ],
    },

    'database-solutions': {
        slug: 'database-solutions',
        title: 'Database Solutions',
        tagline: 'Robust, high-availability data architectures that power your entire operation.',
        heroImage: img.dbHero,
        overview: 'Your data is the backbone of your business. Our database architectures ensure integrity, availability, and blazing-fast query performance, whether you handle thousands or millions of transactions per day.',
        highlights: [
            { stat: '10x', label: 'Query Speed Improvement' },
            { stat: '99.99%', label: 'Data Availability' },
            { stat: '0', label: 'Data Loss Incidents' },
        ],
        sections: [
            {
                heading: 'Schema Design & Optimization',
                body: 'Database schemas are crafted to align with your data access patterns. Through proper indexing strategies, normalization/denormalization decisions, and query optimization, your database performs efficiently under any workload. These designs scale from startup MVPs to enterprise-level systems.',
                image: img.dbSchema,
            },
            {
                heading: 'High Availability & Replication',
                body: 'Downtime costs money. Multi-region replication, automated failover, connection pooling, and read replicas keep your database accessible 24/7. Every architecture is tested against failure scenarios so your data stays safe even when infrastructure fails.',
                image: img.dbHighAvail,
            },
            {
                heading: 'Migration & Modernization',
                body: 'Moving from legacy systems? Our team specializes in zero-downtime database migrations. Whether transitioning from SQL to NoSQL, on-premise to cloud, or upgrading major versions, a seamless transition with comprehensive data validation is guaranteed at every step.',
                image: img.dbMigration,
            },
        ],
        technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'DynamoDB', 'Prisma', 'Supabase'],
        process: [
            { step: 'Assessment', desc: 'A thorough audit of your current data infrastructure, access patterns, and performance bottlenecks.' },
            { step: 'Design', desc: 'The optimal schema, indexing strategy, and replication topology are crafted for your needs.' },
            { step: 'Implementation', desc: 'Building, migrating, and testing with automated validation to ensure data integrity.' },
            { step: 'Monitoring', desc: 'Dashboards, alerts, and automated maintenance are configured for long-term reliability.' },
        ],
    },

    'cloud-devops': {
        slug: 'cloud-devops',
        title: 'Cloud & DevOps',
        tagline: 'Scalable infrastructure that grows with your business, optimized for cost and performance.',
        heroImage: img.cloudHero,
        overview: 'Cloud infrastructure that auto-scales with demand, automated deployment pipelines, and cost optimization let you focus on building your product while the infrastructure complexity is handled for you.',
        highlights: [
            { stat: '60%', label: 'Cost Reduction' },
            { stat: '10x', label: 'Deployment Speed' },
            { stat: '99.9%', label: 'Uptime SLA' },
        ],
        sections: [
            {
                heading: 'Cloud Architecture & Migration',
                body: 'Cloud-native architectures on AWS, GCP, and Azure are tailored to your workload requirements. Whether migrating from on-premise servers or optimizing an existing cloud setup, high availability, security compliance, and cost efficiency are ensured from day one.',
                image: img.cloudArch,
            },
            {
                heading: 'CI/CD Pipeline Automation',
                body: 'Manual deployments are error-prone and slow. Fully automated CI/CD pipelines with GitHub Actions, GitLab CI, or Jenkins come complete with automated testing, staging environments, canary deployments, and one-click rollbacks to keep your team shipping confidently.',
                image: img.cloudCiCd,
            },
            {
                heading: 'Container Orchestration',
                body: 'Your applications are containerized with Docker and orchestrated with Kubernetes for seamless scaling, self-healing, and resource optimization. Our container strategies handle everything from simple services to complex microservice architectures with hundreds of pods.',
                image: img.cloudContainers,
            },
        ],
        technologies: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Nginx'],
        process: [
            { step: 'Audit', desc: 'Analysis of your current infrastructure, costs, and deployment workflows.' },
            { step: 'Blueprint', desc: 'Target architecture designed with Infrastructure as Code (Terraform/Pulumi).' },
            { step: 'Automate', desc: 'CI/CD pipelines, container configs, and monitoring dashboards are built and configured.' },
            { step: 'Optimize', desc: 'Continuous monitoring of spend, performance, and reliability for ongoing savings.' },
        ],
    },

    'cybersecurity': {
        slug: 'cybersecurity',
        title: 'Cybersecurity & Pentesting',
        tagline: 'Proactive security assessments that protect your business before threats materialize.',
        heroImage: img.secHero,
        overview: 'Security breaches can destroy trust and incur massive costs. Thorough security assessments, vulnerability analysis, and penetration testing identify and remediate risks, ensuring your systems, data, and customers remain protected.',
        highlights: [
            { stat: '500+', label: 'Vulnerabilities Found' },
            { stat: '100%', label: 'Compliance Rate' },
            { stat: '0', label: 'Post-Audit Breaches' },
        ],
        sections: [
            {
                heading: 'Penetration Testing',
                body: 'Certified security engineers simulate real-world attacks against your infrastructure, web applications, and APIs. The process goes beyond automated scanning, incorporating manual exploitation, privilege escalation testing, and social engineering assessments to uncover vulnerabilities that tools miss.',
                image: img.secPentest,
            },
            {
                heading: 'Vulnerability Assessment & Remediation',
                body: 'Comprehensive vulnerability assessments span your entire technology stack, producing prioritized remediation roadmaps with clear severity ratings. Our team works alongside your developers to fix critical issues and implement secure coding practices that prevent future vulnerabilities.',
                image: img.secVuln,
            },
            {
                heading: 'Compliance & Security Frameworks',
                body: 'Whether you need SOC 2, GDPR, HIPAA, or ISO 27001 compliance, expert guidance covers the entire process. The technical controls, security policies, and audit trails needed to achieve and maintain certification are implemented end-to-end, building trust with your customers and partners.',
                image: img.secCompliance,
            },
        ],
        technologies: ['Metasploit', 'Burp Suite', 'Nmap', 'Wireshark', 'OWASP ZAP', 'Kali Linux', 'Snort', 'Splunk'],
        process: [
            { step: 'Scoping', desc: 'The assessment scope, attack surface, and rules of engagement are defined collaboratively.' },
            { step: 'Testing', desc: 'Thorough manual and automated security testing across all attack vectors.' },
            { step: 'Reporting', desc: 'A detailed report with findings, risk ratings, and actionable remediation steps.' },
            { step: 'Hardening', desc: 'Collaborative work with your team to fix vulnerabilities and implement security controls.' },
        ],
    },

    'ai-ml-solutions': {
        slug: 'ai-ml-solutions',
        title: 'AI/ML Solutions',
        tagline: 'Transform raw data into strategic insights that drive intelligent decision-making.',
        heroImage: img.aiHero,
        overview: 'AI and machine learning systems turn your data into a competitive advantage. From predictive analytics to natural language processing, these solutions automate complex tasks, surface hidden patterns, and enable data-driven decisions at scale.',
        highlights: [
            { stat: '40%', label: 'Cost Reduction via Automation' },
            { stat: '95%', label: 'Prediction Accuracy' },
            { stat: '5x', label: 'Faster Decision Making' },
        ],
        sections: [
            {
                heading: 'Predictive Analytics & Forecasting',
                body: 'Predictive models analyze historical data to forecast trends, customer behavior, and market shifts. Whether predicting churn, demand, or revenue, these models provide actionable insights that empower proactive business decisions instead of reactive ones.',
                image: img.aiPredictive,
            },
            {
                heading: 'Process Automation with AI',
                body: 'Eliminate repetitive manual work with intelligent automation. AI-powered systems handle document processing, customer support routing, content moderation, data extraction, and quality control, freeing your team to focus on high-value strategic work.',
                image: img.aiAutomation,
            },
            {
                heading: 'Natural Language Processing',
                body: 'Custom NLP solutions understand, interpret, and generate human language. From chatbots and sentiment analysis to document summarization and search, these systems enable natural human-computer interaction that enhances your product experience.',
                image: img.aiNlp,
            },
        ],
        technologies: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'OpenAI API', 'LangChain', 'Pandas', 'Jupyter'],
        process: [
            { step: 'Data Audit', desc: 'Assessment of your data quality, volume, and readiness for machine learning.' },
            { step: 'Model Design', desc: 'Algorithm selection, feature design, and training pipeline construction.' },
            { step: 'Training & Testing', desc: 'Rigorous cross-validation and performance benchmarking for every model.' },
            { step: 'Deployment', desc: 'Production deployment with monitoring, A/B testing, and automated retraining loops.' },
        ],
    },

    'api-development': {
        slug: 'api-development',
        title: 'API Development & Automation',
        tagline: 'Seamless integrations and automated workflows that connect your entire tech ecosystem.',
        heroImage: img.apiHero,
        overview: 'Robust APIs and workflow automation systems connect your tools, eliminate manual processes, and enable seamless data flow. Every API is built with developer experience in mind: well-documented, versioned, and designed for reliability.',
        highlights: [
            { stat: '100ms', label: 'Average Response Time' },
            { stat: '99.95%', label: 'API Uptime' },
            { stat: '80%', label: 'Manual Work Eliminated' },
        ],
        sections: [
            {
                heading: 'RESTful & GraphQL API Design',
                body: 'APIs that developers love to use. Whether REST or GraphQL, every API follows industry best practices with proper authentication, rate limiting, pagination, versioning, and comprehensive documentation. Endpoints are designed around your business logic, not just your database tables.',
                image: img.apiDesign,
            },
            {
                heading: 'Third-Party Integrations',
                body: 'Connect your existing tools into a unified ecosystem. Integration with payment gateways, CRMs, ERPs, communication platforms, analytics services, and any third-party API is handled seamlessly. Built-in middleware manages data transformation, error recovery, and retry logic for bulletproof connections.',
                image: img.apiIntegration,
            },
            {
                heading: 'Workflow Automation',
                body: 'Repetitive business processes are automated end-to-end. From invoice processing and report generation to customer onboarding and data synchronization, these automation workflows save hours of manual work daily while reducing errors to near zero.',
                image: img.apiWorkflow,
            },
        ],
        technologies: ['Node.js', 'Express', 'FastAPI', 'GraphQL', 'REST', 'WebSockets', 'Zapier', 'Swagger/OpenAPI'],
        process: [
            { step: 'Requirements', desc: 'Every integration point, data flow, and business rule is mapped out thoroughly.' },
            { step: 'API Design', desc: 'Schema, endpoints, authentication, and documentation are designed collaboratively.' },
            { step: 'Build & Test', desc: 'Development with comprehensive test suites, load testing, and security review.' },
            { step: 'Monitor', desc: 'Logging, alerting, and analytics configured for ongoing API health tracking.' },
        ],
    },
};

export default serviceDetails;
