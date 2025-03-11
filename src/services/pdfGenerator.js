// src/services/pdfGenerator.js
import jsPDF from 'jspdf';

/**
 * Serviço para geração de PDF de roteiros de viagem
 */
export default {
  /**
   * Gera um PDF do roteiro de viagem
   * @param {Object} itinerary - Dados do roteiro
   * @param {Array} days - Dias do roteiro processados
   */
  generateItineraryPDF(itinerary, days) {
    // Criar um novo documento com fonte que suporta caracteres acentuados
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    // Adicionar fonte que suporta caracteres especiais (UTF-8)
    doc.setFont("helvetica");
    
    // Configurações de margens e espaçamento
    const margin = 20; // margem em mm
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const contentWidth = pageWidth - (2 * margin);
    
    // Função para desenhar texto com quebra de linha
    const drawWrappedText = (text, x, y, maxWidth, lineHeight) => {
      if (!text || text.trim() === '') return y;
      
      const lines = doc.splitTextToSize(text, maxWidth);
      doc.text(lines, x, y);
      return y + (lines.length * lineHeight);
    };
    
    // Função para adicionar conteúdo com verificação de página
    const addContent = (content, x, y, maxWidth, lineHeight, isBold = false) => {
      if (!content || content.trim() === '') return y;
      
      // Se o conteúdo ficar próximo do fim da página, adicione uma nova
      if (y > pageHeight - margin) {
        doc.addPage();
        return margin; // Retorna para o topo da nova página
      }
      
      // Aplicar negrito se necessário
      if (isBold) doc.setFont("helvetica", "bold");
      else doc.setFont("helvetica", "normal");
      
      return drawWrappedText(content, x, y, maxWidth, lineHeight);
    };
    
    // Cabeçalho
    let yPos = margin;
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    yPos = addContent("Roteiro de Viagem - " + itinerary.destination, margin, yPos, contentWidth, 8, true);
    yPos += 10;
    
    // Informações Gerais
    doc.setFontSize(12);
    yPos = addContent("Destino: " + itinerary.destination, margin, yPos, contentWidth, 6);
    yPos += 6;
    yPos = addContent("Orçamento: R$ " + itinerary.budget, margin, yPos, contentWidth, 6);
    yPos += 6;
    yPos = addContent("Duração: " + itinerary.duration + " dias", margin, yPos, contentWidth, 6);
    yPos += 12;
    
    // Linha separadora
    doc.setLineWidth(0.5);
    doc.line(margin, yPos - 6, pageWidth - margin, yPos - 6);
    
    // Detalhes por dia
    for (const day of days) {
      // Verificar se é necessário adicionar uma nova página
      if (yPos > pageHeight - 40) {
        doc.addPage();
        yPos = margin;
      }
      
      // Título do dia
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      yPos = addContent("Dia " + day.day + ": " + day.title, margin, yPos, contentWidth, 7, true);
      yPos += 7;
      
      // Detalhes do dia
      doc.setFontSize(11);
      
      // Manhã
      if (day.morning && day.morning.trim() !== '') {
        doc.setFont("helvetica", "bold");
        doc.text("Manhã:", margin, yPos);
        doc.setFont("helvetica", "normal");
        
        const morningText = day.morning;
        const morningLines = doc.splitTextToSize(morningText, contentWidth - 15);
        yPos += 6;
        doc.text(morningLines, margin + 5, yPos);
        yPos += (morningLines.length * 5) + 5;
      }
      
      // Tarde
      if (day.afternoon && day.afternoon.trim() !== '') {
        // Verificar se é necessário adicionar uma nova página
        if (yPos > pageHeight - 30) {
          doc.addPage();
          yPos = margin;
        }
        
        doc.setFont("helvetica", "bold");
        doc.text("Tarde:", margin, yPos);
        doc.setFont("helvetica", "normal");
        
        const afternoonText = day.afternoon;
        const afternoonLines = doc.splitTextToSize(afternoonText, contentWidth - 15);
        yPos += 6;
        doc.text(afternoonLines, margin + 5, yPos);
        yPos += (afternoonLines.length * 5) + 5;
      }
      
      // Noite
      if (day.night && day.night.trim() !== '') {
        // Verificar se é necessário adicionar uma nova página
        if (yPos > pageHeight - 30) {
          doc.addPage();
          yPos = margin;
        }
        
        doc.setFont("helvetica", "bold");
        doc.text("Noite:", margin, yPos);
        doc.setFont("helvetica", "normal");
        
        const nightText = day.night;
        const nightLines = doc.splitTextToSize(nightText, contentWidth - 15);
        yPos += 6;
        doc.text(nightLines, margin + 5, yPos);
        yPos += (nightLines.length * 5) + 10;
      }
      
      // Adicionar linha separadora entre os dias (exceto após o último)
      if (day !== days[days.length - 1]) {
        doc.setLineWidth(0.3);
        doc.line(margin, yPos - 5, pageWidth - margin, yPos - 5);
        yPos += 5;
      }
    }
    
    // Adicionar numeração de página
    const totalPages = doc.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.text(`Página ${i} de ${totalPages}`, pageWidth - margin - 20, pageHeight - margin / 2);
    }
    
    // Salvar o PDF
    doc.save("roteiro-viagem.pdf");
  }
}