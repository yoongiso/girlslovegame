// ========== 通用搜索功能 ==========
// 所有页面共享的搜索逻辑

function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    if (!searchInput || !searchButton) return; // 如果页面没有搜索框则退出
    
    function performSearch() {
        const keyword = searchInput.value.trim();
        if (keyword === '') {
            alert('请输入关键词');
            return;
        }
        
        // 特殊关键词直接跳转（不区分大小写）
        const lowerKeyword = keyword.toLowerCase();
        if (lowerKeyword === 'suki') {
            window.location.href = '100suki.html';
            return;
        }
        
        // 正常搜索跳转到搜索结果页
        window.location.href = `search_result.html?q=${encodeURIComponent(keyword)}`;
    }
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initSearch);