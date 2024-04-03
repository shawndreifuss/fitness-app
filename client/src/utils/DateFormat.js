function formatMonthAndYear(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }
  
    export default formatMonthAndYear;