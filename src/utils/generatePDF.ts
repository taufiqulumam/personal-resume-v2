import jsPDF from 'jspdf';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  descriptionItems: string[];
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  description: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
}

export const generateResumePDF = () => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - (margin * 2);
  let yPosition = margin;

  // Helper function to add new page if needed
  const checkPageBreak = (requiredSpace: number) => {
    if (yPosition + requiredSpace > pageHeight - margin) {
      pdf.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };

  // Helper function to add text with word wrap
  const addText = (text: string, fontSize: number, isBold: boolean = false, color: number[] = [0, 0, 0]) => {
    pdf.setFontSize(fontSize);
    pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
    pdf.setTextColor(color[0], color[1], color[2]);
    const lines = pdf.splitTextToSize(text, contentWidth);
    
    checkPageBreak(lines.length * fontSize * 0.5);
    
    pdf.text(lines, margin, yPosition);
    yPosition += lines.length * fontSize * 0.5;
  };

  // Helper function to add justified text
  const addJustifiedText = (text: string, fontSize: number, isBold: boolean = false, color: number[] = [0, 0, 0]) => {
    pdf.setFontSize(fontSize);
    pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
    pdf.setTextColor(color[0], color[1], color[2]);
    
    const lines = pdf.splitTextToSize(text, contentWidth);
    const lineHeight = fontSize * 0.5;
    
    checkPageBreak(lines.length * lineHeight);
    
    lines.forEach((line: string, index: number) => {
      // Don't justify the last line
      if (index === lines.length - 1) {
        pdf.text(line, margin, yPosition);
      } else {
        // Justify the line by distributing spaces
        const words = line.trim().split(/\s+/);
        if (words.length === 1) {
          pdf.text(line, margin, yPosition);
        } else {
          const lineWidth = pdf.getTextWidth(line);
          const spaceWidth = (contentWidth - lineWidth) / (words.length - 1);
          
          let xPos = margin;
          words.forEach((word, wordIndex) => {
            pdf.text(word, xPos, yPosition);
            if (wordIndex < words.length - 1) {
              xPos += pdf.getTextWidth(word) + pdf.getTextWidth(' ') + spaceWidth;
            }
          });
        }
      }
      yPosition += lineHeight;
    });
  };

  // Header Section
  pdf.setFillColor(24, 24, 27);
  pdf.rect(0, 0, pageWidth, 50, 'F');
  
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(24);
  pdf.setFont('helvetica', 'bold');
  pdf.text('MUHAMMAD TAUFIQUL UMAM', pageWidth / 2, 20, { align: 'center' });
  
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Full Stack Developer', pageWidth / 2, 30, { align: 'center' });
  
  pdf.setFontSize(9);
  pdf.text('taufiqulmam@gmail.com | Bekasi, West Java, Indonesia | linkedin.com/in/muhammad-taufiqul-umam/', pageWidth / 2, 40, { align: 'center' });

  yPosition = 60;

  // Professional Summary
  addText('PROFESSIONAL SUMMARY', 14, true, [24, 24, 27]);
  yPosition += 3;
  addJustifiedText("I'm Muhammad Taufiqul Umam, a Full Stack Developer who is communicative, trustworthy, hardworking, responsible and able to work with teams or individuals who have expertise in the field of web programming. I'm a passionate Full Stack Developer with over 3 years of experience in creating innovative web and mobile applications. My journey in programming started during my university years, and since then, I've been focusing on web development that makes a real impact. I specialize in PHP frameworks like Laravel and modern JavaScript frameworks like React and Node.js, and I'm always eager to learn new technologies. I believe in writing clean, maintainable code and creating user experiences that are both functional and delightful.", 10);
  yPosition += 5;

  // Skills Section
  checkPageBreak(40);
  addText('TECHNICAL SKILLS', 14, true, [24, 24, 27]);
  yPosition += 3;

  const skills = [
    { name: 'PHP', level: 90 },
    { name: 'JavaScript/TypeScript', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 80 },
  ];

  skills.forEach(skill => {
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(0, 0, 0);
    pdf.text(`${skill.name}`, margin, yPosition);
    
    // Progress bar
    const barWidth = 60;
    const barHeight = 4;
    const barX = pageWidth - margin - barWidth;
    pdf.setFillColor(230, 230, 230);
    pdf.rect(barX, yPosition - 3, barWidth, barHeight, 'F');
    pdf.setFillColor(24, 24, 27);
    pdf.rect(barX, yPosition - 3, (barWidth * skill.level) / 100, barHeight, 'F');
    
    yPosition += 7;
  });

  yPosition += 3;

  // Frameworks & Tools
  checkPageBreak(20);
  addText('FRAMEWORKS & TOOLS', 12, true, [24, 24, 27]);
  yPosition += 2;
  const frameworks = 'React.js, Vue.js, Express.js, Node.js, Laravel, Livewire, Bootstrap, Tailwind CSS, Oracle, PostgreSQL, MySQL, MongoDB, Git, Docker, Jenkins, Postman, VS Code, Cursor, Jira, DBeaver';
  addText(frameworks, 9);
  yPosition += 5;

  // Work Experience
  checkPageBreak(60);
  addText('WORK EXPERIENCE', 14, true, [24, 24, 27]);
  yPosition += 3;

  const experiences: Experience[] = [
    {
      title: 'Software Engineer',
      company: 'Badan Pendapatan Daerah Provinsi DKI Jakarta',
      location: 'Jakarta, Indonesia',
      period: 'Jan 2022 - Present',
      description: 'Work in the field of planning and development with the scope of:',
      descriptionItems: [
        'Developed and maintained online tax applications for DKI Jakarta.',
        'Implemented new features based on user feedback.',
        'Optimized application performance, perform verification, and testing of tax system applications.',
        'Collaborated with cross-functional teams to enhance user experience.',
      ],
    },
    {
      title: 'Software Quality Assurance',
      company: 'Incubator Business Center Gunadarma University',
      location: 'Depok, Indonesia',
      period: 'Sept 2021 - Jan 2022',
      description: 'Work as a software tester for mHealth application development of the Ministry of Health of the Republic of Indonesia with the scope of:',
      descriptionItems: [
        'Review and analyze system specifications.',
        'Execute test cases (manual or automated) and analyze results.',
        'Evaluate product code according to specifications.',
        'Create logs to document testing processes.',
        'Report bugs and errors to development teams.',
      ],
    },
    {
      title: 'Lab Assistant',
      company: 'Lembaga Pengembangan Universitas Gunadarma',
      location: 'Bekasi, Indonesia',
      period: 'Feb 2021 - Jan 2024',
      description: 'Responsible for course registration and student workshops at the Faculty of Computer Science and Faculty of Economics, Gunadarma University.',
      descriptionItems: [
      ],
    },
  ];

  experiences.forEach((exp, index) => {
    if (index > 0) checkPageBreak(40);
    
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0);
    pdf.text(exp.title, margin, yPosition);
    yPosition += 5;
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text(exp.company, margin, yPosition);
    yPosition += 4;
    
    pdf.setFontSize(9);
    pdf.setTextColor(100, 100, 100);
    pdf.text(`${exp.period} | ${exp.location}`, margin, yPosition);
    yPosition += 5;
    
    pdf.setFontSize(9);
    pdf.setTextColor(0, 0, 0);
    const descLines = pdf.splitTextToSize(exp.description, contentWidth);
    pdf.text(descLines, margin, yPosition);
    yPosition += descLines.length * 4;
    
    exp.descriptionItems.forEach(item => {
      checkPageBreak(8);
      const itemLines = pdf.splitTextToSize(`• ${item}`, contentWidth - 5);
      pdf.text(itemLines, margin + 3, yPosition);
      yPosition += itemLines.length * 4;
    });
    
    yPosition += 5;
  });

  // Education
  checkPageBreak(50);
  addText('EDUCATION', 14, true, [24, 24, 27]);
  yPosition += 3;

  const education: Education[] = [
    {
      degree: 'Master of Management Information System',
      institution: 'Gunadarma University',
      location: 'Jakarta, Indonesia',
      period: '2023 - 2025',
      gpa: '3.81/4.00',
      description: 'Focused on advanced topics in information systems, including data management, software development methodologies, and system architecture.',
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Gunadarma University',
      location: 'Bekasi, Indonesia',
      period: '2017 - 2021',
      gpa: '3.68/4.00',
      description: 'Focused on management, software engineering, algorithms, and data structures. Writing scientific papers related to website-based application development and completing a thesis on sentiment analysis classification using machine learning.',
    },
  ];

  education.forEach((edu, index) => {
    if (index > 0) checkPageBreak(30);
    
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0);
    pdf.text(edu.degree, margin, yPosition);
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`GPA: ${edu.gpa}`, pageWidth - margin - 30, yPosition);
    yPosition += 5;
    
    pdf.setFontSize(10);
    pdf.text(edu.institution, margin, yPosition);
    yPosition += 4;
    
    pdf.setFontSize(9);
    pdf.setTextColor(100, 100, 100);
    pdf.text(`${edu.period} | ${edu.location}`, margin, yPosition);
    yPosition += 5;
    
    pdf.setFontSize(9);
    pdf.setTextColor(0, 0, 0);
    const eduLines = pdf.splitTextToSize(edu.description, contentWidth);
    pdf.text(eduLines, margin, yPosition);
    yPosition += eduLines.length * 4 + 5;
  });

  // Certifications
  checkPageBreak(40);
  addText('CERTIFICATIONS', 14, true, [24, 24, 27]);
  yPosition += 3;

  const certifications: Certification[] = [
    { name: 'PLM200 - Business Processes in Project Management', issuer: 'Edugate Indonesia', date: '2025', credentialId: '550175758' },
    { name: 'SAP01 - SAP Overview', issuer: 'Edugate Indonesia', date: '2025', credentialId: '550175780' },
    { name: 'Python Fundamental for Data Science', issuer: 'DQLab', date: '2021', credentialId: 'DQLABINTP1OERLGH' },
    { name: 'R Fundamental for Data Science', issuer: 'DQLab', date: '2021', credentialId: 'DQLABINTR1EHVWLB' },
    { name: 'Oracle Project', issuer: 'Lembaga Pengembangan Komputerisasi Universitas Gunadarma', date: '2021', credentialId: '4010047200227111' },
    { name: 'Full Stack Web Developer', issuer: 'BuildWith Angga', date: '2020', credentialId: '5I97HjfSvU' },
  ];

  certifications.forEach(cert => {
    checkPageBreak(8);
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0);
    pdf.text(`${cert.name}`, margin, yPosition);
    yPosition += 4;
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(8);
    pdf.setTextColor(100, 100, 100);
    pdf.text(`${cert.issuer} | ${cert.date} | ID: ${cert.credentialId}`, margin, yPosition);
    yPosition += 5;
  });

  // Footer
  const footerY = pageHeight - 10;
  pdf.setFontSize(8);
  pdf.setTextColor(150, 150, 150);
  pdf.text('Generated from muhammad-taufiqul-umam.netlify.app', pageWidth / 2, footerY, { align: 'center' });

  // Save the PDF
  pdf.save('Muhammad_Taufiqul_Umam_Resume.pdf');
};
