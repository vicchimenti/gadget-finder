<script type="text/javascript">
$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});

$(function () {
	$('input#id_search').quicksearch('div.knowledgeBaseItemWrapper', {
		'delay': 200,
		'selector': '.knowledgeBaseItem',
		'stripeRows': ['odd', 'even'],
		'noResults': '.noResultsToShow',
		'bind': 'keyup click',
		'minValLength': 16,
		'prepareQuery': function (val) {
			return new RegExp(val, "i");
		},
		'testQuery': function (query, txt, _row) {
			return query.test(txt);
		},
		'show': function() {
			$(this).removeClass('hideByTextbox');
		},
		'hide': function() {
			$(this).addClass('hideByTextbox');
		}
	});			
});

$(function () {
	$('#selectboxCategories').quicksearch('div.knowledgeBaseItemWrapper', {
		'delay': 200,
		'selector': 'ul',
		'bind': 'change',
		'prepareQuery': function (val) {
			return new RegExp(val, "i");
		},
		'testQuery': function (query, txt, _row) {
			return query.test(txt);
		},
		'show': function() {
			$(this).removeClass('hideByDropdownCategories');
		},
		'hide': function() {
			$(this).addClass('hideByDropdownCategories');
		}
	});			
});

</script>