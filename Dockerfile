# base image
FROM oven/bun:1 AS base
RUN apt-get update && apt-get install -y procps
WORKDIR /app

FROM base AS development
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
EXPOSE 3000
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["bun", "dev"]
