(function() {var type_impls = {
"manifest":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GetRedBlackTreeData%3C'a%3E-for-RedBlackTree%3C'a,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hypertree/red_black_tree.rs.html#171\">source</a><a href=\"#impl-GetRedBlackTreeData%3C'a%3E-for-RedBlackTree%3C'a,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, V&gt; <a class=\"trait\" href=\"hypertree/red_black_tree/trait.GetRedBlackTreeData.html\" title=\"trait hypertree::red_black_tree::GetRedBlackTreeData\">GetRedBlackTreeData</a>&lt;'a&gt; for <a class=\"struct\" href=\"hypertree/red_black_tree/struct.RedBlackTree.html\" title=\"struct hypertree::red_black_tree::RedBlackTree\">RedBlackTree</a>&lt;'a, V&gt;<div class=\"where\">where\n    V: <a class=\"trait\" href=\"hypertree/hypertree/trait.Payload.html\" title=\"trait hypertree::hypertree::Payload\">Payload</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hypertree/red_black_tree.rs.html#172\">source</a><a href=\"#method.data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hypertree/red_black_tree/trait.GetRedBlackTreeData.html#tymethod.data\" class=\"fn\">data</a>(&amp;mut self) -&gt; &amp;mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u8.html\">u8</a>] <a href=\"#\" class=\"tooltip\" data-notable-ty=\"&amp;mut [u8]\">ⓘ</a></h4></section><section id=\"method.set_root_index\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hypertree/red_black_tree.rs.html#175\">source</a><a href=\"#method.set_root_index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hypertree/red_black_tree/trait.GetRedBlackTreeData.html#tymethod.set_root_index\" class=\"fn\">set_root_index</a>(&amp;mut self, root_index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u32.html\">u32</a>)</h4></section></div></details>","GetRedBlackTreeData<'a>","manifest::state::global::GlobalTraderTree","manifest::state::global::GlobalDepositTree","manifest::state::market::ClaimedSeatTree","manifest::state::market::Bookside"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GetRedBlackTreeReadOnlyData%3C'a%3E-for-RedBlackTree%3C'a,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hypertree/red_black_tree.rs.html#156\">source</a><a href=\"#impl-GetRedBlackTreeReadOnlyData%3C'a%3E-for-RedBlackTree%3C'a,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, V&gt; <a class=\"trait\" href=\"hypertree/red_black_tree/trait.GetRedBlackTreeReadOnlyData.html\" title=\"trait hypertree::red_black_tree::GetRedBlackTreeReadOnlyData\">GetRedBlackTreeReadOnlyData</a>&lt;'a&gt; for <a class=\"struct\" href=\"hypertree/red_black_tree/struct.RedBlackTree.html\" title=\"struct hypertree::red_black_tree::RedBlackTree\">RedBlackTree</a>&lt;'a, V&gt;<div class=\"where\">where\n    V: <a class=\"trait\" href=\"hypertree/hypertree/trait.Payload.html\" title=\"trait hypertree::hypertree::Payload\">Payload</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hypertree/red_black_tree.rs.html#157\">source</a><a href=\"#method.data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hypertree/red_black_tree/trait.GetRedBlackTreeReadOnlyData.html#tymethod.data\" class=\"fn\">data</a>(&amp;self) -&gt; &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u8.html\">u8</a>] <a href=\"#\" class=\"tooltip\" data-notable-ty=\"&amp;[u8]\">ⓘ</a></h4></section><section id=\"method.root_index\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hypertree/red_black_tree.rs.html#160\">source</a><a href=\"#method.root_index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hypertree/red_black_tree/trait.GetRedBlackTreeReadOnlyData.html#tymethod.root_index\" class=\"fn\">root_index</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u32.html\">u32</a></h4></section><section id=\"method.max_index\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hypertree/red_black_tree.rs.html#163\">source</a><a href=\"#method.max_index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hypertree/red_black_tree/trait.GetRedBlackTreeReadOnlyData.html#tymethod.max_index\" class=\"fn\">max_index</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u32.html\">u32</a></h4></section></div></details>","GetRedBlackTreeReadOnlyData<'a>","manifest::state::global::GlobalTraderTree","manifest::state::global::GlobalDepositTree","manifest::state::market::ClaimedSeatTree","manifest::state::market::Bookside"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HyperTreeWriteOperations%3C'a,+V%3E-for-RedBlackTree%3C'a,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hypertree/red_black_tree.rs.html#989\">source</a><a href=\"#impl-HyperTreeWriteOperations%3C'a,+V%3E-for-RedBlackTree%3C'a,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, V&gt; <a class=\"trait\" href=\"hypertree/hypertree/trait.HyperTreeWriteOperations.html\" title=\"trait hypertree::hypertree::HyperTreeWriteOperations\">HyperTreeWriteOperations</a>&lt;'a, V&gt; for <a class=\"struct\" href=\"hypertree/red_black_tree/struct.RedBlackTree.html\" title=\"struct hypertree::red_black_tree::RedBlackTree\">RedBlackTree</a>&lt;'a, V&gt;<div class=\"where\">where\n    V: <a class=\"trait\" href=\"hypertree/hypertree/trait.Payload.html\" title=\"trait hypertree::hypertree::Payload\">Payload</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hypertree/red_black_tree.rs.html#991\">source</a><a href=\"#method.insert\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hypertree/hypertree/trait.HyperTreeWriteOperations.html#tymethod.insert\" class=\"fn\">insert</a>(&amp;mut self, index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u32.html\">u32</a>, value: V)</h4></section></summary><div class=\"docblock\"><p>Insert and rebalance. The data at index should be already zeroed.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove_by_index\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hypertree/red_black_tree.rs.html#1043\">source</a><a href=\"#method.remove_by_index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hypertree/hypertree/trait.HyperTreeWriteOperations.html#tymethod.remove_by_index\" class=\"fn\">remove_by_index</a>(&amp;mut self, index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u32.html\">u32</a>)</h4></section></summary><div class=\"docblock\"><p>Remove a node by index and rebalance.</p>\n</div></details></div></details>","HyperTreeWriteOperations<'a, V>","manifest::state::global::GlobalTraderTree","manifest::state::global::GlobalDepositTree","manifest::state::market::ClaimedSeatTree","manifest::state::market::Bookside"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RedBlackTree%3C'a,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hypertree/red_black_tree.rs.html#1105\">source</a><a href=\"#impl-RedBlackTree%3C'a,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, V&gt; <a class=\"struct\" href=\"hypertree/red_black_tree/struct.RedBlackTree.html\" title=\"struct hypertree::red_black_tree::RedBlackTree\">RedBlackTree</a>&lt;'a, V&gt;<div class=\"where\">where\n    V: <a class=\"trait\" href=\"hypertree/hypertree/trait.Payload.html\" title=\"trait hypertree::hypertree::Payload\">Payload</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/hypertree/red_black_tree.rs.html#1108\">source</a><h4 class=\"code-header\">pub fn <a href=\"hypertree/red_black_tree/struct.RedBlackTree.html#tymethod.new\" class=\"fn\">new</a>(\n    data: &amp;'a mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u8.html\">u8</a>],\n    root_index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u32.html\">u32</a>,\n    max_index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u32.html\">u32</a>\n) -&gt; <a class=\"struct\" href=\"hypertree/red_black_tree/struct.RedBlackTree.html\" title=\"struct hypertree::red_black_tree::RedBlackTree\">RedBlackTree</a>&lt;'a, V&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new RedBlackTree. Does not mutate data yet. Assumes the actual\ndata in data is already well formed as a red black tree.</p>\n</div></details></div></details>",0,"manifest::state::global::GlobalTraderTree","manifest::state::global::GlobalDepositTree","manifest::state::market::ClaimedSeatTree","manifest::state::market::Bookside"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()