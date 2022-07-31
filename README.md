see more on https://k6.io/docs/results-visualization/influxdb-+-grafana/

### How to use

```bash
docker-compose up -d

docker-compose run -v \
    ./scripts:/scripts \
    k6 run /scripts/test-01.js
```

see your grafana on http://localhost:3000/d/WoOWSnz4z/k6-load-testing-results?orgId=1&refresh=5s
