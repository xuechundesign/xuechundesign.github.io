#!/bin/bash

cd /Users/what_a_big_chuner/PortfolioWebsite/xuechundesign.github.io/;

browser() {
  sleep 1
  open http://localhost:4000

}
serve(){
  bundle exec jekyll serve -w -l
}

browser & serve
